import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Riccardo Tagliabue Components',
    brandUrl: 'https://riccardotagliabue.com',
  },
});
