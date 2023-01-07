import Box from "../Box";
import MonacoEditor, { MonacoEditorProps } from "../MonacoEditor";

type CodeEditorProps = MonacoEditorProps & {
  onClose?: () => void;
};

const CodeEditor = ({ onClose, ...rest }: CodeEditorProps) => {
  return (
    <Box>
      <MonacoEditor {...rest} />
    </Box>
  );
};

export default CodeEditor;
