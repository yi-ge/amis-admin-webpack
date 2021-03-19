import schema2component from "../../utils/schema2component";


const schema = {
  type: 'page',
  title: '首页',
  body: 'body...'
};

export default schema2component(schema);