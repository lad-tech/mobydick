---
to: <%= path %>/components/<%= name %>/index.ts
---
import <%= name %> from './<%= name %>';
export * from './types';
export {<%= name %>};
