import type { Schema, Struct } from '@strapi/strapi';

export interface ArticleBasicText extends Struct.ComponentSchema {
  collectionName: 'components_article_basic_texts';
  info: {
    displayName: 'BasicText';
    icon: 'bold';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
  };
}

export interface FooterSection extends Struct.ComponentSchema {
  collectionName: 'components_footer_sections';
  info: {
    description: '';
    displayName: 'Section';
    icon: 'information';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Links: Schema.Attribute.Component<'general.link', true>;
    Title: Schema.Attribute.String;
  };
}

export interface GeneralLink extends Struct.ComponentSchema {
  collectionName: 'components_general_links';
  info: {
    displayName: 'Link';
    icon: 'earth';
  };
  attributes: {
    Target: Schema.Attribute.String;
    Text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'article.basic-text': ArticleBasicText;
      'footer.section': FooterSection;
      'general.link': GeneralLink;
    }
  }
}
