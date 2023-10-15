import { useTranslation } from 'react-i18next';

import { Header, HeaderLink } from '../components/Header/Header';

type ChildrenComponent = () => JSX.Element; // Define the type for the Children component

export const withBasicLayout = (Children: ChildrenComponent) => () => {
  const { t } = useTranslation('header');

  const headerLinks: HeaderLink[] = [
    {
      label: `${ t('home') }`,
      link: '#hero',
    },
  ];

  return (
    <div className='flex min-w-screen min-h-screen overflow-x-hidden'>
      <Header
        links={ headerLinks }
        hideGitHubLink={ true }
        alignRight={ true }
        isFat={ true }
        forceMenuOpenInMobile={ false }
      />
      <main className='w-screen'>
        <Children />
      </main>
    </div>
  );
};
