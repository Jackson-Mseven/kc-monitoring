export const TEAM_PERMISSIONS = {
  TEAM_READ: 'team:read',
  TEAM_WRITE: 'team:write',
  TEAM_MANAGE: 'team:manage',
  TEAM_DELETE: 'team:delete',
} as const

/**
 * 团队角色
 */
export const TEAM_ROLES = {
  OWNER: 0,
  MANAGER: 1,
  MEMBER: 2,
} as const

/**
 * 团队加入请求类型
 * 0: 邀请
 * 1: 申请
 */
export const TEAM_JOIN_REQUEST_TYPE = {
  INVITE: 0,
  APPLY: 1,
} as const

/**
 * 团队加入请求状态
 * 0: 待处理
 * 1: 已接受
 * 2: 已拒绝
 * 3: 已取消（用户加入其他团队）
 */
export const TEAM_JOIN_REQUEST_STATUS = {
  PENDING: 0,
  APPROVED: 1,
  REJECTED: 2,
  CANCELLED: 3,
} as const

export const TEAM_JOIN_REQUEST_STATUS_TEXT = {
  [TEAM_JOIN_REQUEST_STATUS.PENDING]: 'Pending',
  [TEAM_JOIN_REQUEST_STATUS.APPROVED]: 'Approved',
  [TEAM_JOIN_REQUEST_STATUS.REJECTED]: 'Rejected',
  [TEAM_JOIN_REQUEST_STATUS.CANCELLED]: 'Cancelled',
} as const

export const TEAM_REQUEST_REDIS_KEY = {
  INVITE: 'team:invite',
  APPLY: 'team:apply',
} as const
