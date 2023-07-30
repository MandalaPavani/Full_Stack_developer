import { combineReducers } from 'redux';
import {
  SET_HERO_BANNER_CONTENT,
  SET_CONTENT_SECTION_CONTENT,
} from './actions';

interface HeroBannerState {
  title: string;
  description: string;
}

interface ContentSectionState {
  content: string;
}

const initialHeroBannerState: HeroBannerState = {
  title: '',
  description: '',
};

const initialContentSectionState: ContentSectionState = {
  content: '',
};

const heroBannerReducer = (
  state = initialHeroBannerState,
  action: any
): HeroBannerState => {
  switch (action.type) {
    case SET_HERO_BANNER_CONTENT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const contentSectionReducer = (
  state = initialContentSectionState,
  action: any
): ContentSectionState => {
  switch (action.type) {
    case SET_CONTENT_SECTION_CONTENT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  heroBanner: heroBannerReducer,
  contentSection: contentSectionReducer,
});

export default rootReducer;
