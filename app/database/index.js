import { db } from '../../config/db.config.js';
import * as constantsNameTableJs from '../constants/constants.name-table.js';

export default function initSchemaTables() {
  db.schema.hasTable(constantsNameTableJs.userTable).then((exists) => {
    if (!exists) {
      return db.schema.createTable(constantsNameTableJs.userTable, (table) => {
        table.uuid('id').primary().defaultTo(db.raw('(UUID())'));
        table.string('name', 250);
        table.string('email', 250);
        table.string('password', 500);
        table.string('role', 50).defaultTo(constantsNameTableJs.userRoles.USER);
        table.timestamp('created_at').notNullable().defaultTo(db.raw('now()'));
        table.timestamp('updated_at').notNullable().defaultTo(db.raw('now()'));
      });
    }
  });

  db.schema.hasTable(constantsNameTableJs.chapterTable).then((exists) => {
    if (!exists) {
      return db.schema.createTable(constantsNameTableJs.chapterTable, (table) => {
        table.uuid('id').primary().defaultTo(db.raw('(UUID())'));
        table.string('path', 500).notNullable();
        table.string('name', 250);
        table.boolean('block').notNullable().defaultTo(0);
        table.timestamp('created_at').notNullable().defaultTo(db.raw('now()'));
        table.timestamp('updated_at').notNullable().defaultTo(db.raw('now()'));
      });
    }
  });
  db.schema.hasTable(constantsNameTableJs.mangaTable).then((exists) => {
    if (!exists) {
      return db.schema.createTable(constantsNameTableJs.mangaTable, (table) => {
        table.uuid('id').primary().defaultTo(db.raw('(UUID())'));
        table.string('name', 500);
        table.string('amount_chapter', 500);
        table
            .uuid('chapterId')
            .references('id')
            .inTable(constantsNameTableJs.chapterTable)
            .notNullable()
            .onDelete('cascade');
        table.timestamp('created_at').notNullable().defaultTo(db.raw('now()'));
        table.timestamp('updated_at').notNullable().defaultTo(db.raw('now()'));
      });
    }
  });
db.schema.hasTable(constantsNameTableJs.servicesTable).then((exists) => {
  if (!exists) {
    return db.schema.createTable(
      constantsNameTableJs.servicesTable,
      (table) => {
        table.uuid('id').primary().defaultTo(db.raw('(UUID())'));
        table.boolean('like').defaultTo(0);
        table
          .uuid('userId')
          .references('id')
          .inTable(constantsNameTableJs.userTable)
          .notNullable()
          .onDelete('cascade');
        table
          .uuid('mangaId')
          .references('id')
          .inTable(constantsNameTableJs.mangaTable)
          .notNullable()
          .onDelete('cascade');
        table.string('type', 250);
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(db.raw('now()'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(db.raw('now()'));
      }
    );
  }
});

db.schema.hasTable(constantsNameTableJs.postTable).then((exists) => {
  if (!exists) {
    return db.schema.createTable(
      constantsNameTableJs.postTable,
      (table) => {
        table.uuid('id').primary().defaultTo(db.raw('(UUID())'));
        table
          .uuid('userId')
          .references('id')
          .inTable(constantsNameTableJs.userTable)
          .notNullable()
          .onDelete('cascade');
        table
          .uuid('mangaId')
          .references('id')
          .inTable(constantsNameTableJs.mangaTable)
          .notNullable()
          .onDelete('cascade');
        table
          .timestamp('created_at')
          .notNullable()
          .defaultTo(db.raw('now()'));
        table
          .timestamp('updated_at')
          .notNullable()
          .defaultTo(db.raw('now()'));
      }
    );
  }
});
}