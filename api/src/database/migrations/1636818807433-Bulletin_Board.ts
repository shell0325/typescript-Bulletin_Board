import {MigrationInterface, QueryRunner} from "typeorm";

export class BulletinBoard1636818807433 implements MigrationInterface {
    name = 'BulletinBoard1636818807433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `tags` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `age` tinyint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `article` (`id` int NOT NULL AUTO_INCREMENT, `user_id` tinyint NOT NULL, `title` varchar(255) NOT NULL, `content` text NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `articles_tags` (`id` int NOT NULL AUTO_INCREMENT, `article_id` int NOT NULL, `tag_id` tinyint NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `tagId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `article` ADD CONSTRAINT `FK_636f17dadfea1ffb4a412296a28` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `articles_tags` ADD CONSTRAINT `FK_0844b8f28aa32ef4bb5885d5003` FOREIGN KEY (`article_id`) REFERENCES `article`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `articles_tags` ADD CONSTRAINT `FK_b54b6a9b430c2fabecd25d3732e` FOREIGN KEY (`tagId`) REFERENCES `tags`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `articles_tags` DROP FOREIGN KEY `FK_b54b6a9b430c2fabecd25d3732e`");
        await queryRunner.query("ALTER TABLE `articles_tags` DROP FOREIGN KEY `FK_0844b8f28aa32ef4bb5885d5003`");
        await queryRunner.query("ALTER TABLE `article` DROP FOREIGN KEY `FK_636f17dadfea1ffb4a412296a28`");
        await queryRunner.query("DROP TABLE `articles_tags`");
        await queryRunner.query("DROP TABLE `article`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `tags`");
    }

}
