import Editor, { type EditorProps } from "@monaco-editor/react";

/**
 * Monaco editor
 * @returns
 */

export type MonacoEditorProps = EditorProps & typeof defaultProps & {};

const defaultProps: EditorProps = {
  language: "html",
};

const MonacoEditor = ({
  language,
  value,
  onChange,
  ...rest
}: MonacoEditorProps) => {
  const handleChange = (value: any, event: any) => {
    onChange?.(value, event);
  };

  console.log(value);
  return (
    <Editor
      height="50vh"
      language={language}
      defaultLanguage={language}
      onChange={handleChange}
      value={value}
      options={{
        formatOnType: true,
        formatOnPaste: true,
        ...rest.options,
      }}
      {...rest}
    />
  );
};

MonacoEditor.defaultProps = defaultProps;
export default MonacoEditor;
