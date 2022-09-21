import React from 'react';
import Vditor from 'vditor';
import 'vditor/dist/index.css';

const MarkdownEditor = () => {
  const [vd, setVd] = React.useState<Vditor>();

  console.log('editor:', vd);

  React.useEffect(() => {
    const vditor = new Vditor('vditor', {
      after: () => {
        vditor.setValue('`Vditor` 最小代码示例');
        setVd(vditor);
      },
    });
  }, []);

  return <div id="vditor" className="vditor" />;
};

MarkdownEditor.displayName = 'MarkdownEditor';

export default MarkdownEditor;
