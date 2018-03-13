import tpl from './index.atpl';

export default () => {
  return (
    <div>
      <h1>Hello, {tpl({
        name: 'yahaha',
      })}</h1>
    </div>
  );
}
