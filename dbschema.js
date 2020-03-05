let db = {
    users: [
        {
            userID: 'asXKPGnHy0ZoSZVf9tAYWdZAbO73',
            email: 'new2@email.com',
            handle: 'newone2',
            createdAt: '2020-02-17T03:15:24.311Z',
            imageUrl: 'image/fsfgagd/sgeahbsdf',
            bio: 'Hello, my name is user, nice to meet you.',
            website: 'https://www.user.com',
            location: 'Helsinki, Finland'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2020-02-17T03:15:24.311Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2020-02-17T03:15:24.311Z',
            screamID: '5Dx88f2K7a2zyF82jXxX'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            type: 'like | comment',
            createdAt: '2020-02-17T03:15:24.311Z',
            screamID: '5Dx88f2K7a2zyF82jXxX'
        }
    ]
};

const userDetails = {
    credentials: {
        userID: 'asXKPGnHy0ZoSZVf9tAYWdZAbO73',
        email: 'new2@email.com',
        handle: 'newone2',
        createdAt: '2020-02-17T03:15:24.311Z',
        imageUrl: 'image/fsfgagd/sgeahbsdf',
        bio: 'Hello, my name is user, nice to meet you.',
        website: 'https://www.user.com',
        location: 'Helsinki, Finland'
    },
    likes: [
        {
            userHandle: 'user',
            screamID: '5Dx88f2K7a2zyF82jXxX'
        },
        {
            userHandle: 'user',
            screamID: '8plkRvTTktgVW1YYAOn4'
        }
    ]
}