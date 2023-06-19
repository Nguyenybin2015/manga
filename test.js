import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const getDirectories = srcPath => {
  const directories = [];
  const files = readdirSync(srcPath);
  for (const file of files) {
    const stat = statSync(join(srcPath, file));
    if (stat.isDirectory()) {
      directories.push(file);
    }
  }
  return directories;
};

let directories = getDirectories('./app/public/img/mashle');
const sort = params => {
  params.sort((a, b) => {
    const aNum = parseInt(a.split(' ')[1]);
    const bNum = parseInt(b.split(' ')[1]);
    return aNum - bNum;
  });
  return params;
}
directories = sort(directories)
directories.forEach(element => {
  // console.log(element);
  let image = getDirectories(`./app/public/img/mashle/${element}`);
  image = sort(image);
  console.log(image); 
  console.log('==============================='); 
});
