import { List, ListItem, ListItemContent, Stack, Tab, TabList, Tabs } from '@mui/joy'
import './App.css'
import '@mui/joy'
import { useState } from 'react'
import { GrLike, GrLikeFill } from 'react-icons/gr'

function VoteImage(props: { image?: ImageBitmap }) {
    return (
        <div className='voteimage'>
            <div className='image'>
                <p>image here</p>
            </div>
            <div className='vote'>
                <GrLike stroke='green' style={{ padding: "10px", width: "20px", height: "20px" }} />
                <h4>Like</h4>
                <GrLikeFill fill='green' style={{ padding: "10px", width: "20px", height: "20px" }} />
            </div>
        </div>
    )
}

function VoteImageList(props: { year: number }) {
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

    return (
        <>
            <div className='topbar'>
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