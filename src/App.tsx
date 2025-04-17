import { Button, DialogContent, DialogTitle, List, ListItem, ListItemContent, Modal, ModalClose, ModalDialog, Stack, Tab, TabList, Tabs } from '@mui/joy'
import './App.css'
import '@mui/joy'
import { useState } from 'react'
import { GrLike, GrLikeFill } from 'react-icons/gr'
import { encode } from 'base-64'

function VoteImage(props: { image?: Uint8Array }) {
    const str = String.fromCharCode(...props.image ?? [0]);
    const img = props.image ? encode(str) : '';
    return (
        <div className='voteimage'>
            <div className='image'>
                <img src={img} title='image not found'></img>
            </div>
            <div className='vote'>
                <GrLike stroke='green' style={{ padding: "10px", width: "20px", height: "20px" }} />
                <h4>Like</h4>
                <GrLikeFill fill='green' style={{ padding: "10px", width: "20px", height: "20px" }} />
            </div>
        </div>
    )
}

function VoteImageList(_props: { year: number }) {
    // To handle getting the list from specified year
    return (
        <div className='cscroll'>
            <div className='scroll'>
                <List sx={{ padding: '0' }}>
                    <ListItem>
                        <ListItemContent>
                            <VoteImage />
                            <VoteImage />
                            <VoteImage />
                        </ListItemContent>
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

function App() {
    const [year, setYear] = useState(2025);
    const [upload, setUpload] = useState(false);
    const [imageFile, setImageFile] = useState<string | undefined>(undefined);
    const [_uploadYear, setUploadYear] = useState(2025);
    const [uploadGood, setUploadGood] = useState(false);

    return (
        <>
            <div className='topbar'>
                <Button color='primary' onClick={() => setUpload(true)}>Upload</Button>
                <Modal open={upload} onClose={() => {
                    setUpload(false);
                    setUploadGood(false);
                    setImageFile(undefined);
                    setUploadYear(2025);
                }}>
                    <ModalDialog variant='outlined'>
                        <ModalClose />
                        <DialogTitle>Upload a photo</DialogTitle>
                        <DialogContent>Upload a crazy photo of hair of an athlete.</DialogContent>
                        <input type='file' title='Image' accept='image/*' onChange={async e => {
                            setUploadGood(e.target.files !== null);
                            if (e.target.files !== null) {
                                setImageFile(URL.createObjectURL(new Blob([await e.target.files[0].arrayBuffer()])));
                            } else {
                                setImageFile(undefined);
                            }
                        }} />
                        <label htmlFor='selectyear'>Year</label>
                        <select id='selectyear' name='year' title='Year'>
                            {[...Array(26)].map((_, i) => <option key={i} value={2025 - i} onSelect={() => setUploadYear(2025 - i)}>{2025 - i}</option>)}
                        </select>
                        {imageFile && <img title='Image' src={imageFile} className='upload'></img>}
                        <Button color='success' disabled={!uploadGood}>Upload</Button>
                    </ModalDialog>
                </Modal>
                <Stack sx={{ width: '100%' }}>
                    <Tabs>
                        <TabList tabFlex={1}>
                            {[...Array(26)].map((_, i) => (
                                <Tab color='neutral' key={i} onClick={() => setYear(2000 + i)}>{2000 + i}</Tab>
                            ))}
                        </TabList>
                    </Tabs>
                </Stack>
            </div>
            <VoteImageList year={year} />
        </>
    )
}

export default App