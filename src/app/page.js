'use client'
import ListUser from '../components/ListUser'
import { faFaceSmile, faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import {
  faAt,
  faEllipsisVertical,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { faReply } from '@fortawesome/free-solid-svg-icons/faReply'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import {
  Avatar,
  AvatarGroup,
  IconButton,
  ListItem,
  ListSubheader,
  Stack,
} from '@mui/material'
import List from '@mui/material/List'
import { useEffect, useState } from 'react'

const apiUrl = 'http://localhost:3000/api/user'

const getUsers = async () => {
  const data = await fetch(apiUrl)
  return (await data.json()).data
}

const Page = () => {
  const [users, setUsers] = useState([])
  const [curUser, setCurUser] = useState()

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users)
    })
  }, [])

  return (
    <Stack direction={'row'} className="bg-gray-50 h-full">
      {/* left component */}
      <div className="w-[300px] hidden lg:block flex-shrink-0">
        <ListUser users={users} onCardClick={(user) => setCurUser(user)} />
      </div>

      {/* center component */}

      <div className="flex-grow bg-white h-full">
        <Stack className="h-full" justifyContent={'space-between'}>
          <List
            className="w-full  overflow-y-auto flex-grow overflow-auto"
            subheader={
              <ListSubheader className="h-[60px] border-b" component="div">
                <div className="w-full h-full flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-lg text-black">
                      General Chat
                    </h5>
                  </div>

                  <div className="flex items-center gap-2">
                    <AvatarGroup
                      max={4}
                      sx={{
                        '& .MuiAvatar-root': {
                          width: 30,
                          height: 30,
                        },
                      }}
                    >
                      {users.map((user) => (
                        <Avatar
                          key={user.id}
                          alt={user.userName}
                          src={user.image}
                          sx={{
                            width: 30,
                            height: 30,
                          }}
                        />
                      ))}
                    </AvatarGroup>

                    <IconButton>
                      <PersonAddAltOutlinedIcon fontSize="medium" />
                    </IconButton>
                  </div>
                </div>
              </ListSubheader>
            }
          >
            {users.map((user) => (
              <ListItem
                key={user.id}
                alignItems="flex-start"
                className="justify-between relative"
              >
                <div className="flex gap-1 flex-grow ">
                  <Avatar
                    alt={user.image}
                    src={user.image}
                    className="mr-2 w-8 h-8"
                  />
                  <div>
                    <span className=" text-black font-bold mr-3 text-[18px]">
                      {user.userName}
                    </span>
                    <span className="text-[12px] text-gray-500 font-semibold">
                      10:42 AM
                    </span>
                    <p className="text-[14px] text-gray-600">{user.message}</p>
                    <span
                      onClick={() => setCurUser(user)}
                      className="mr-2 text-[12px] text-sky-600 font-bold cursor-pointer"
                    >
                      {user.replies.length} replies
                    </span>
                    <span className="mr-2 text-[12px] text-gray-500 font-semibold">
                      last reply yesterday at 09:12 PM
                    </span>
                  </div>
                </div>
                <div className="flex px-1 top-1 right-2 absolute flex-shrink-0 group/item items-center justify-center rounded-md border  border-gray-300 text-gray-500 cursor-pointer ml-2">
                  <div className="flex w-0  overflow-hidden group-hover/item:w-[70px] transition-all">
                    <IconButton>
                      <FontAwesomeIcon icon={faFaceSmile} size="xs" />
                    </IconButton>

                    <IconButton>
                      <FontAwesomeIcon icon={faReply} size="xs" />
                    </IconButton>
                  </div>

                  <IconButton>
                    <FontAwesomeIcon
                      icon={faEllipsisVertical}
                      width={12}
                      height={12}
                      size="xs"
                    />
                  </IconButton>
                </div>
              </ListItem>
            ))}
          </List>
          <div className="h-16  mb-1 border-t flex items-end border-gray-300">
            <div className="flex items-center w-full gap-1 h-[40px] pb-2 px-2">
              <IconButton>
                <KeyboardVoiceOutlinedIcon />
              </IconButton>
              <input className="h-full border-l p-1 flex-grow outline-none " />
              <IconButton>
                <FontAwesomeIcon icon={faAt} />
              </IconButton>
              <IconButton>
                <FontAwesomeIcon icon={faFaceSmile} />
              </IconButton>
              <IconButton>
                <FontAwesomeIcon icon={faPaperPlane} />
              </IconButton>
            </div>
          </div>
        </Stack>
      </div>

      {/* right component */}

      <div className="w-[350px] hidden lg:block flex-shrink-0">
        <List
          className="w-full  overflow-y-auto flex-grow overflow-auto"
          subheader={
            <ListSubheader className="h-[60px] border-b" component="div">
              <div className="w-full h-full flex justify-between items-center">
                <div>
                  <h5 className="font-semibold text-lg text-black">replies</h5>
                  <p className="text-gray-400 text-sm">#12 replies</p>
                </div>

                <div className="flex items-center gap-2">
                  <IconButton>
                    <FontAwesomeIcon icon={faXmark} />
                  </IconButton>
                </div>
              </div>
            </ListSubheader>
          }
        >
          {curUser &&
            curUser.replies.map((rep) => (
              <ListItem
                key={rep.id}
                alignItems="flex-start"
                className="justify-between"
              >
                <div className="flex gap-1 w-3/4 flex-shrink-0">
                  <Avatar
                    alt={rep.userName}
                    src={rep.image}
                    className="mr-2 w-8 h-8"
                  />
                  <div>
                    <span className=" text-black font-bold mr-3 text-[18px]">
                      {rep.userName}
                    </span>
                    <span className="text-[12px] text-gray-500 font-semibold">
                      10:42 AM
                    </span>
                    <p className="text-[14px] text-gray-600">{rep.message}</p>
                  </div>
                </div>
              </ListItem>
            ))}
        </List>
      </div>
    </Stack>
  )
}

export default Page
