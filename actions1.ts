export const SET_HERO_BANNER_CONTENT = 'SET_HERO_BANNER_CONTENT';
export const SET_CONTENT_SECTION_CONTENT = 'SET_CONTENT_SECTION_CONTENT';

export const setHeroBannerContent = (title: string, description: string) => {
  return {
    type: SET_HERO_BANNER_CONTENT,
    payload: { title, description },
  };
};

export const setContentSectionContent = (content: string) => {
  return {
    type: SET_CONTENT_SECTION_CONTENT,
    payload: { content },
  };
};
