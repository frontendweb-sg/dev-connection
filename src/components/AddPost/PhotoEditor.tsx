import { useState, useRef } from "react";
import Box from "../Box";
import Button from "../Button";
import IconButton from "../IconButton";
import Photo, { PhotoRef } from "../Photo";
import Typography from "../Typegraphy";
import Uploader from "../Uploader";

/**
 * Photo editor component
 */

type PhotoEditorProps = {
  onChange: (name: string, value: File | string) => void;
  onClose: () => void;
  value?: string | File;
};
const PhotoEditor = ({ onChange, onClose, value }: PhotoEditorProps) => {
  const [imgUrl, setImgUrl] = useState<string | string[]>("");

  //const inpRef = useRef<PhotoRef>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ?? [];
    const reader = new FileReader();

    reader.onload = () => {
      const str = reader.result as string;
      setImgUrl(str);
    };

    reader.readAsDataURL(files[0]);
    // set image
    onChange("image", files[0]);
  };

  const onCancel = () => {
    setImgUrl("");
    onChange("image", "");
  };

  const image = value ? URL.createObjectURL(value as any) : imgUrl;
  return (
    <Box>
      <Box>
        <Typography variant="subtitle1">Upload photo</Typography>
        <Uploader dropzone data-text="Upload images" onChange={onChangeHandler}>
          {image && (
            <Box
              className="dropzone-img"
              style={{ backgroundImage: `url(${image})` }}
            >
              <IconButton icon="times" onClick={onCancel} />
            </Box>
          )}
        </Uploader>

        {/* <Photo ref={inpRef} onChange={onChangeHandler}>
          {image && (
            <Box
              className="dropzone-img"
              style={{ backgroundImage: `url(${image})` }}
            >
              <IconButton icon="times" onClick={onCancel} />
            </Box>
          )}
        </Photo> */}
      </Box>
      <Box className="mt-2 d-flex justify-content-end">
        <Button onClick={onClose}>Add photo</Button>
      </Box>
    </Box>
  );
};

export default PhotoEditor;
