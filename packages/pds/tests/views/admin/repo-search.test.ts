import AtpAgent from '@atproto/api'
import { TAKEDOWN } from '@atproto/api/src/client/types/com/atproto/admin/defs'
import {
  runTestServer,
  forSnapshot,
  CloseFn,
  paginateAll,
  adminAuth,
} from '../../_util'
import { SeedClient } from '../../seeds/client'
import usersBulkSeed from '../../seeds/users-bulk'
import { Database } from '../../../src'

describe('pds admin repo search view', () => {
  let agent: AtpAgent
  let db: Database
  let close: CloseFn
  let sc: SeedClient
  let headers: { [s: string]: string }

  beforeAll(async () => {
    const server = await runTestServer({
      dbPostgresSchema: 'views_admin_repo_search',
    })
    close = server.close
    db = server.ctx.db
    agent = new AtpAgent({ service: server.url })
    sc = new SeedClient(agent)
    await usersBulkSeed(sc)
    headers = { authorization: adminAuth() }
  })

  afterAll(async () => {
    await close()
  })

  beforeAll(async () => {
    await sc.takeModerationAction({
      action: TAKEDOWN,
      subject: {
        $type: 'com.atproto.admin.defs#repoRef',
        did: sc.dids['cara-wiegand69.test'],
      },
    })
  })

  it('gives relevant results', async () => {
    const result = await agent.api.com.atproto.admin.searchRepos(
      { term: 'car' },
      { headers },
    )

    const handles = result.data.repos.map((u) => u.handle)

    const shouldContain = [
      'cara-wiegand69.test', // Present despite repo takedown
      'eudora-dietrich4.test', // Carol Littel
      'shane-torphy52.test', //Sadie Carter
      'aliya-hodkiewicz.test', // Carlton Abernathy IV
      'carlos6.test',
      'carolina-mcdermott77.test',
    ]

    shouldContain.forEach((handle) => expect(handles).toContain(handle))

    if (db.dialect === 'pg') {
      expect(handles).toContain('cayla-marquardt39.test') // Fuzzy match supported by postgres
    } else {
      expect(handles).not.toContain('cayla-marquardt39.test')
    }

    const shouldNotContain = [
      'sven70.test',
      'hilario84.test',
      'santa-hermann78.test',
      'dylan61.test',
      'preston-harris.test',
      'loyce95.test',
      'melyna-zboncak.test',
    ]

    shouldNotContain.forEach((handle) => expect(handles).not.toContain(handle))

    if (db.dialect === 'pg') {
      expect(forSnapshot(result.data.repos)).toMatchInlineSnapshot(snapPg)
    } else {
      expect(forSnapshot(result.data.repos)).toMatchInlineSnapshot(snapSqlite)
    }
  })

  it('finds repo by did', async () => {
    const term = sc.dids['cara-wiegand69.test']
    const res = await agent.api.com.atproto.admin.searchRepos(
      { term, limit: 1 },
      { headers },
    )

    expect(res.data.repos.length).toEqual(1)
    expect(res.data.repos[0].did).toEqual(term)
  })

  it('paginates with term', async () => {
    const results = (results) => results.flatMap((res) => res.users)
    const paginator = async (cursor?: string) => {
      const res = await agent.api.com.atproto.admin.searchRepos(
        { term: 'p', cursor, limit: 3 },
        { headers },
      )
      return res.data
    }

    const paginatedAll = await paginateAll(paginator)
    paginatedAll.forEach((res) =>
      expect(res.repos.length).toBeLessThanOrEqual(3),
    )

    const full = await agent.api.com.atproto.admin.searchRepos(
      { term: 'p' },
      { headers },
    )

    expect(full.data.repos.length).toBeGreaterThan(5)
    expect(results(paginatedAll)).toEqual(results([full.data]))
  })

  it('paginates without term', async () => {
    const results = (results) => results.flatMap((res) => res.repos)
    const paginator = async (cursor?: string) => {
      const res = await agent.api.com.atproto.admin.searchRepos(
        { cursor, limit: 3 },
        { headers },
      )
      return res.data
    }

    const paginatedAll = await paginateAll(paginator, 5)
    paginatedAll.forEach((res) =>
      expect(res.repos.length).toBeLessThanOrEqual(3),
    )

    const full = await agent.api.com.atproto.admin.searchRepos(
      { limit: 15 },
      { headers },
    )

    expect(full.data.repos.length).toEqual(15)
    expect(results(paginatedAll)).toEqual(results([full.data]))
  })
})

// Not using jest snapshots because it doesn't handle the conditional pg/sqlite very well:
// you can achieve it using named snapshots, but when you run the tests for pg the test suite fails
// since the sqlite snapshots appear obsolete to jest (and vice-versa when you run the sqlite suite).

const snapPg = `
Array [
  Object {
    "did": "user(0)",
    "email": "cara-wiegand69.test@bsky.app",
    "handle": "cara-wiegand69.test",
    "indexedAt": "1970-01-01T00:00:00.000Z",
    "invitesDisabled": false,
    "moderation": Object {
      "currentAction": Object {
        "action": "com.atproto.admin.defs#takedown",
        "id": 1,
      },
    },
    "relatedRecords": Array [],
  },
  Object {
    "did": "user(1)",
    "email": "eudora-dietrich4.test@bsky.app",
    "handle": "eudora-dietrich4.test",
    "indexedAt": "1970-01-01T00:00:00.000Z",
    "invitesDisabled": false,
    "moderation": Object {},
    "relatedRecords": Array [
      Object {
        "$type": "app.bsky.actor.profile",
        "avatar": Object {
          "$type": "blob",
          "mimeType": "image/jpeg",
          "ref": Object {
            "$link": "cids(0)",
          },
          "size": 3976,
        },
        "description": "",
        "displayName": "Carol Littel",
      },
    ],
  },
  Object {
    "did": "user(2)",
    "email": "shane-torphy52.test@bsky.app",
    "handle": "shane-torphy52.test",
    "indexedAt": "1970-01-01T00:00:00.000Z",
    "invitesDisabled": false,
    "moderation": Object {},
    "relatedRecords": Array [
      Object {
        "$type": "app.bsky.actor.profile",
        "avatar": Object {
          "$type": "blob",
          "mimeType": "image/jpeg",
          "ref": Object {
            "$link": "cids(0)",
          },
          "size": 3976,
        },
        "description": "",
        "displayName": "Sadie Carter",
      },
    ],
  },
  Object {
    "did": "user(3)",
    "email": "aliya-hodkiewicz.test@bsky.app",
    "handle": "aliya-hodkiewicz.test",
    "indexedAt": "1970-01-01T00:00:00.000Z",
    "invitesDisabled": false,
    "moderation": Object {},
    "relatedRecords": Array [
      Object {
        "$type": "app.bsky.actor.profile",
        "avatar": Object {
          "$type": "blob",
          "mimeType": "image/jpeg",
          "ref": Object {
            "$link": "cids(0)",
          },
          "size": 3976,
        },
        "description": "",
        "displayName": "Carlton Abernathy IV",
      },
    ],
  },
  Object {
    "did": "user(4)",
    "email": "carlos6.test@bsky.app",
    "handle": "carlos6.test",
    "indexedAt": "1970-01-01T00:00:00.000Z",
    "invitesDisabled": false,
    "moderation": Object {},
    "relatedRecords": Array [],
  },
  Object {
    "did": "user(5)",
    "email": "carolina-mcdermott77.test@bsky.app",
    "handle": "carolina-mcdermott77.test",
    "indexedAt": "1970-01-01T00:00:00.000Z",
    "invitesDisabled": false,
    "moderation": Object {},
    "relatedRecords": Array [
      Object {
        "$type": "app.bsky.actor.profile",
        "avatar": Object {
          "$type": "blob",
          "mimeType": "image/jpeg",
          "ref": Object {
            "$link": "cids(0)",
          },
          "size": 3976,
        },
        "description": "",
        "displayName": "Latoya Windler",
      },
    ],
  },
  Object {
    "did": "user(6)",
    "email": "cayla-marquardt39.test@bsky.app",
    "handle": "cayla-marquardt39.test",
    "indexedAt": "1970-01-01T00:00:00.000Z",
    "invitesDisabled": false,
    "moderation": Object {},
    "relatedRecords": Array [
      Object {
        "$type": "app.bsky.actor.profile",
        "avatar": Object {
          "$type": "blob",
          "mimeType": "image/jpeg",
          "ref": Object {
            "$link": "cids(0)",
          },
          "size": 3976,
        },
        "description": "",
        "displayName": "Rachel Kshlerin",
      },
    ],
  },
]
`
const snapSqlite = `
Array [
  Object {
    "did": "user(0)",
    "email": "aliya-hodkiewicz.test@bsky.app",
    "handle": "aliya-hodkiewicz.test",
    "indexedAt": "1970-01-01T00:00:00.000Z",
    "invitesDisabled": false,
    "moderation": Object {},
    "relatedRecords": Array [
      Object {
        "$type": "app.bsky.actor.profile",
        "avatar": Object {
          "$type": "blob",
          "mimeType": "image/jpeg",
          "ref": Object {
            "$link": "cids(0)",
          },
          "size": 3976,
        },
        "description": "",
        "displayName": "Carlton Abernathy IV",
      },
    ],
  },
  Object {
    "did": "user(1)",
    "email": "cara-wiegand69.test@bsky.app",
    "handle": "cara-wiegand69.test",
    "indexedAt": "1970-01-01T00:00:00.000Z",
    "invitesDisabled": false,
    "moderation": Object {
      "currentAction": Object {
        "action": "com.atproto.admin.defs#takedown",
        "id": 1,
      },
    },
    "relatedRecords": Array [],
  },
  Object {
    "did": "user(2)",
    "email": "carlos6.test@bsky.app",
    "handle": "carlos6.test",
    "indexedAt": "1970-01-01T00:00:00.000Z",
    "invitesDisabled": false,
    "moderation": Object {},
    "relatedRecords": Array [],
  },
  Object {
    "did": "user(3)",
    "email": "carolina-mcdermott77.test@bsky.app",
    "handle": "carolina-mcdermott77.test",
    "indexedAt": "1970-01-01T00:00:00.000Z",
    "invitesDisabled": false,
    "moderation": Object {},
    "relatedRecords": Array [
      Object {
        "$type": "app.bsky.actor.profile",
        "avatar": Object {
          "$type": "blob",
          "mimeType": "image/jpeg",
          "ref": Object {
            "$link": "cids(0)",
          },
          "size": 3976,
        },
        "description": "",
        "displayName": "Latoya Windler",
      },
    ],
  },
  Object {
    "did": "user(4)",
    "email": "eudora-dietrich4.test@bsky.app",
    "handle": "eudora-dietrich4.test",
    "indexedAt": "1970-01-01T00:00:00.000Z",
    "invitesDisabled": false,
    "moderation": Object {},
    "relatedRecords": Array [
      Object {
        "$type": "app.bsky.actor.profile",
        "avatar": Object {
          "$type": "blob",
          "mimeType": "image/jpeg",
          "ref": Object {
            "$link": "cids(0)",
          },
          "size": 3976,
        },
        "description": "",
        "displayName": "Carol Littel",
      },
    ],
  },
  Object {
    "did": "user(5)",
    "email": "shane-torphy52.test@bsky.app",
    "handle": "shane-torphy52.test",
    "indexedAt": "1970-01-01T00:00:00.000Z",
    "invitesDisabled": false,
    "moderation": Object {},
    "relatedRecords": Array [
      Object {
        "$type": "app.bsky.actor.profile",
        "avatar": Object {
          "$type": "blob",
          "mimeType": "image/jpeg",
          "ref": Object {
            "$link": "cids(0)",
          },
          "size": 3976,
        },
        "description": "",
        "displayName": "Sadie Carter",
      },
    ],
  },
]
`
