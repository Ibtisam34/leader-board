// import _ from 'lodash';
import { renderScores} from './modules/scores.js';
import { fetchScores } from './modules/fetch.js';
import { postForm } from './modules/postform.js';
import './style.css';

renderScores();
postForm();
fetchScores();