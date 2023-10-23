import { NextResponse } from 'next/server'

const images = [
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=2934&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

export async function GET() {
  const json_response = {
    status: 'success',
    data: [
      {
        id: '001',
        userName: 'Jonh',
        notify: 5,
        message: 'hello how are you ??',
        image: images[0],
        replies: [
          {
            id: '002',
            userName: 'Lisa',
            notify: 2,
            message: 'What s the most beautiful place you are ever been to?',
            image: images[1],
          },
          {
            id: '003',
            userName: 'Jenny',
            notify: 12,
            message: 'Good morning?',
            image: images[2],
          },
        ],
      },
      {
        id: '002',
        userName: 'Lisa',
        notify: 2,
        message: 'What s the most beautiful place you are ever been to?',
        image: images[1],
        replies: [
          {
            id: '001',
            userName: 'Jonh',
            notify: 5,
            message: 'hello how are you ??',
            image: images[0],
          },
        ],
      },
      {
        id: '003',
        userName: 'Lay',
        notify: 10,
        message: 'What s the most beautiful place you are ever been to?',
        image: images[2],
        replies: [
          {
            id: '001',
            userName: 'Lay',
            notify: 10,
            message: 'What s the most beautiful place you are ever been to?',
            image: images[2],
          },
          {
            id: '002',
            userName: 'Jamas',
            notify: 10,
            message: 'realy ??',
            image: images[1],
          },
        ],
      },
      {
        id: '004',
        userName: 'Thanos',
        notify: 10,
        message: 'Can you help me ?',
        image: images[3],
        replies: [
          {
            id: '001',
            userName: 'Lay',
            notify: 10,
            message: 'I am react developer ?',
            image: images[2],
          },
          {
            id: '002',
            userName: 'Jamas',
            notify: 10,
            message: 'What is say ??',
            image: images[4],
          },
        ],
      },
      {
        id: '005',
        userName: 'Kai',
        notify: 10,
        message: 'Can you help me ?',
        image: images[4],
        replies: [
          {
            id: '004',
            userName: 'Thanos',
            notify: 10,
            message: 'Can you help me ?',
            image: images[3],
          },
          {
            id: '001',
            userName: 'Jonh',
            notify: 5,
            message: 'hello how are you ??',
            image: images[0],
          },
        ],
      },
    ],
  }

  return NextResponse.json(json_response)
}
