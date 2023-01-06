import Editor, {
  DiffEditor,
  useMonaco,
  loader,
  type EditorProps,
} from "@monaco-editor/react";

/**
 * Monaco editor
 * @returns
 */

type MonacoEditorProps = EditorProps &
  typeof defaultProps & {
    value: string;
  };

const defaultProps: EditorProps = {
  language: "css",
};

const MonacoEditor = ({ language, value }: MonacoEditorProps) => {
  return (
    <Editor
      height="50vh"
      language={language}
      defaultLanguage={language}
      value={value}
    />
  );
};

MonacoEditor.defaultProps = defaultProps;
export default MonacoEditor;
