// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "public/images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "navigation",
        label: "Navigation",
        path: "content/navigation",
        format: "json",
        fields: [
          {
            type: "image",
            name: "logo",
            label: "Logo URL",
            required: true
          },
          {
            type: "object",
            name: "links",
            label: "Navigation Links",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Label"
              },
              {
                type: "string",
                name: "url",
                label: "URL"
              }
            ]
          }
        ]
      },
      {
        name: "hero",
        label: "Hero Section",
        path: "content/hero",
        format: "json",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "promotionImage",
            label: "Promotion Image"
          },
          {
            type: "string",
            name: "buttonText",
            label: "Button Text",
            required: true
          },
          {
            type: "string",
            name: "buttonLink",
            label: "Button Link",
            required: true
          }
        ]
      },
      {
        name: "services",
        label: "Services",
        path: "content/services",
        format: "json",
        fields: [
          {
            type: "object",
            name: "services",
            label: "Services",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title"
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "image",
                name: "ServiceImage",
                label: "Service Image"
              }
            ]
          }
        ]
      },
      {
        name: "contact",
        label: "Contact",
        path: "content/contact",
        format: "json",
        fields: [
          {
            type: "string",
            name: "whatsappLink",
            label: "WhatsApp Link",
            required: true
          },
          {
            type: "string",
            name: "whatsappText",
            label: "WhatsApp Button Text"
          }
        ]
      },
      {
        name: "clients",
        label: "Clients",
        path: "content/clients",
        format: "json",
        fields: [
          {
            type: "object",
            name: "clients",
            label: "Client Logos",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Client Name"
              },
              {
                type: "image",
                name: "logo",
                label: "Client Logo"
              }
            ]
          }
        ]
      },
      {
        name: "websites",
        label: "Websites",
        path: "content/websites",
        format: "json",
        fields: [
          {
            type: "object",
            name: "websites",
            label: "Website URLs",
            list: true,
            fields: [
              {
                type: "string",
                name: "url",
                label: "Website URL",
                required: true
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
