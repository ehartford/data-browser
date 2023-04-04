import React, { useState } from 'react';
import './App.css';
import {Grid, Stack, Button, TextField} from '@mui/material';

import { WysiwygEditor } from '@remirror/react-editors/wysiwyg';

const App: React.FC = () => {

  interface Question {
    id: number, 
    question: string,
    answer: string
  }

  const [currentItem, setCurrentItem] = useState<null | Question>();
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>    
        <Stack paddingTop={5} justifyContent={"center"} spacing={2} direction="row">
          <Button style={{width: "100px"}} variant="contained">Previous</Button>
          <TextField style={{width: "100px"}} label="ID" variant="outlined" />
          <Button style={{width: "100px"}} variant="contained">Next</Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <div style={{ padding: 16 }}>
          <WysiwygEditor placeholder='Enter text...' initialContent={currentItem?.question} />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div style={{ padding: 16, height: "100%" }}>
          <WysiwygEditor placeholder='Enter text...' initialContent={currentItem?.answer}/>
        </div>
      </Grid>
    </Grid>
  );
};

export default App;
