import { Stack, Tab, TabList, Tabs } from '@mui/joy'
import './App.css'
import '@mui/joy'

function App() {
    return (
        <>
            <div className='topbar'>
                <Stack sx={{ width: '100%' }}>
                    <Tabs>
                        <TabList tabFlex={1}>
                            {[...Array(25)].map((_, i) => (
                                <Tab color='neutral' key={i}>{2000 + i}</Tab>
                            ))}
                        </TabList>
                    </Tabs>
                </Stack>
            </div>
        </>
    )
}

export default App