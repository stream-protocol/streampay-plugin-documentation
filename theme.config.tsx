import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <img src="https://i.imgur.com/zwbfGJs.png" alt="StreamPay Logo" />, // Replace with the actual path to your logo
  project: {
    link: 'https://github.com/stream-protocol/streampay-plugin-documentation.git',
  },
  chat: {
    link: 'https://discord.gg/zaxTzCuF',
  },
  docsRepositoryBase: 'https://github.com/stream-protocol/streampay-plugin-documentation.git',
  footer: {
    text: '© 2023 Stream Protocol',
  },
};

export default config;
