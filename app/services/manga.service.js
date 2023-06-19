import { httpStatus } from "../constants/constants.http-status.code.js";
import { serverMsg } from "../constants/constants.message-response.js";
import responseFailed from "../utils/utils.response-failed.js";
import responseRequest from "../utils/utils.response.js";
import axios from "axios";
import cheerio from "cheerio";
import fs from "fs";


export async function getAllMangaService(res, body){
  const { url, nameManga } = body;
  const elementDelete = 7;
axios
  .get(url)
  .then(async (response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    const chapterLink = [];
    const chapterName = [];

    // Find all 'a' tags
    const links = $(".chapter > a");

    // Iterate over the links and extract their href attribute
    links.each((index, element) => {
      const link = $(element).attr("href");
      const name = $(element).text();
      chapterLink.push(link);
      chapterName.push(name);
    });
    for (let index = 0; index < elementDelete; index++) {
      chapterLink.pop();
      chapterName.pop();
    }
    if (!fs.existsSync(`app/public/img/${nameManga}`)) {
      await fs.mkdirSync(`app/public/img/${nameManga}`);
    }
    for (let index = 0; index < chapterName.length; index++) {
      setTimeout(async () => {
        await getImage(chapterName[index], chapterLink[index], nameManga);
      }, 30000 * index);
    }
    // return responseRequest(res, httpStatus.ok);
  })
  .catch((error) => {
    // return responseFailed(res, serverMsg, error);
    console.log("Error:", error);
  });  
}

async function getImage(folderName, webpageUrl, nameManga) {
  const folderPath = `app/public/img/${nameManga}/${folderName}`;

  await axios
    .get(webpageUrl)
    .then(async (response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      const imageSrcList = [];

      $("img").each((index, element) => {
        const src = $(element).attr("src");
        imageSrcList.push(src);
      });

      // console.log("Image src attributes:");
      var count = 0;
      const imagesToDelete = 2; //Number of images to delete from the beginning and end, Because 2 image first and final is logo :)))

      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
      imageSrcList.forEach(async (element, index) => {
        if (
          index >= imagesToDelete &&
          index < imageSrcList.length - imagesToDelete
        ) {
          await url(element, count++);
        }
      });
    })
    .catch((error) => {
      console.error("Error retrieving webpage:", error);
    });

  function url(imageUrl, count) {
    const outputPath = `${folderPath}/image${count}.jpg`;

    axios({
      method: "get",
      url: imageUrl,
      responseType: "stream",
      headers: {
        "sec-ch-ua":
          '"Not/A)Brand";v="99", "Microsoft Edge";v="115", "Chromium";v="115"',
        Referer: "https://www.nettruyenco.vn/",
        DNT: 1,
        "sec-ch-ua-mobile": "?0",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.0.0",
        "sec-ch-ua-platform": "Windows",
      },
    })
      .then((response) => {
        response.data.pipe(fs.createWriteStream(outputPath));
      })
      .catch((error) => {
        console.error("Error downloading the image:", error);
        // console.log(outputPath);
      });
  }
};