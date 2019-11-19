import includeData from 'nunjucks-includeData';
import { ComponentTag } from './nunjucks-extensions';
import { html as config } from '../../config';

const classesFilter = config =>
  Object.keys(config)
    .map(key => (!!config[key] ? key : null))
    .filter(v => v)
    .join(' ')

classesFilter.safe = true

module.exports = env => {
  // IncludeData plugin
  includeData.install(env);

  // Extensions
  env.addExtension('component', new ComponentTag(env));

  // Filters
  env.addFilter('isNumber', input => typeof input === 'number');
  env.addFilter('classes', classesFilter)

};
