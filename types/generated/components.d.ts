import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article.basic-text': ArticleBasicText;
      'footer.section': FooterSection;
      'general.link': GeneralLink;
    }
  }
}
