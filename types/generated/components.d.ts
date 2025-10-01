import type { Schema, Struct } from '@strapi/strapi';

export interface SharedDropdownButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_dropdown_buttons';
  info: {
    displayName: 'dropdownButton';
  };
  attributes: {
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    label: Schema.Attribute.String;
    LanguageOptions: Schema.Attribute.Component<
      'shared.language-dropdown',
      true
    >;
  };
}

export interface SharedLanguageDropdown extends Struct.ComponentSchema {
  collectionName: 'components_shared_language_dropdowns';
  info: {
    displayName: 'dropdownOptions';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    isButton: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
  };
}

export interface SharedMiniBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_mini_banners';
  info: {
    displayName: 'miniBanner';
  };
  attributes: {
    AccessibilityButton: Schema.Attribute.Component<'shared.link', false>;
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    LanguageDropdown: Schema.Attribute.Component<
      'shared.dropdown-button',
      false
    >;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.dropdown-button': SharedDropdownButton;
      'shared.language-dropdown': SharedLanguageDropdown;
      'shared.link': SharedLink;
      'shared.mini-banner': SharedMiniBanner;
    }
  }
}
