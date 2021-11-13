import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Tag } from './tag.entity';
import { Article } from './article.entity';

@Entity({ name: 'articles_tags' })
export class ArticleTag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('tinyint', { name: 'article_id' })
  articleId: number;
  @ManyToOne(() => Article, {
    cascade: true,
  })
  @JoinColumn({ name: 'article_id' })
  article: Article;

  @Column('tinyint', { name: 'tag_id' })
  tagId: number;
  @ManyToOne(() => Tag, {
    cascade: true,
  })
  @JoinColumn()
  tag: Tag;

  @CreateDateColumn({ name: 'created_at' })
  readonly createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  readonly updatedAt!: Date;
}
