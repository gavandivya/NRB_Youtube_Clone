import TagList from './TagList';
import VideoList from './VideoList';
import { useSelector } from 'react-redux'

const Body = () => {
    const storeValue = useSelector(store => store.SideMenu.toggle);

    return (
        <div className={storeValue ? "col-10" : "col-12 m-2"}>
            <TagList />
            <VideoList />
        </div>
    )
}

export default Body
