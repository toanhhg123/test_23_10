import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Avatar,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from '@mui/material'

const ListUser = ({ users, onCardClick }) => {
  return (
    <div className="h-full">
      <List
        className="w-full h-full overflow-y-auto"
        subheader={
          <ListSubheader
            className="bg-gray-50 py-1 h-[60px] border-b"
            component="div"
          >
            <div className="w-full h-full flex justify-between items-center">
              <div>
                <span className="font-semibold"> Nested List Items</span>
                <FontAwesomeIcon className="ml-1" icon={faCaretDown} />
              </div>

              <IconButton className="bg-white w-9 h-9" aria-label="delete">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ color: '#511f41' }}
                  className="w-5"
                />
              </IconButton>
            </div>
          </ListSubheader>
        }
      >
        {users.map((user) => (
          <ListItem
            onClick={() => onCardClick(user)}
            key={user.id}
            className=" hover:bg-white transition-all cursor-pointer"
            secondaryAction={
              <Chip label={user.replies.length} color="primary" />
            }
          >
            <Avatar src={user.image} className="w-8 h-8 mr-2" />
            <ListItemText primary={user.userName} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default ListUser
