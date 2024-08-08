import type { Schema, Attribute } from '@strapi/strapi';

export interface GeneralLink extends Schema.Component {
  collectionName: 'components_general_links';
  info: {
    displayName: 'Link';
    icon: 'earth';
  };
  attributes: {
    Text: Attribute.String;
    Target: Attribute.String;
  };
}

export interface FooterSection extends Schema.Component {
  collectionName: 'components_footer_sections';
  info: {
    displayName: 'Section';
    icon: 'information';
    description: '';
  };
  attributes: {
    Description: Attribute.Text;
    Links: Attribute.Component<'general.link', true>;
    Title: Attribute.String;
  };
}

export interface ArticleBasicText extends Schema.Component {
  collectionName: 'components_article_basic_texts';
  info: {
    displayName: 'BasicText';
    icon: 'bold';
  };
  attributes: {
    Content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'general.link': GeneralLink;
      'footer.section': FooterSection;
      'article.basic-text': ArticleBasicText;
    }
  }
}
