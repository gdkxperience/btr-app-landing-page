import { create } from 'zustand'

export type LandingPhase = 'chat' | 'transition' | 'app'

interface LandingStore {
  phase: LandingPhase
  chatComplete: boolean
  transitionComplete: boolean
  ownerCtaDismissed: boolean
  skipChat: () => void
  completeChatSequence: () => void
  completeTransition: () => void
  dismissOwnerCta: () => void
}

export const useLandingStore = create<LandingStore>((set) => ({
  phase: 'chat',
  chatComplete: false,
  transitionComplete: false,
  ownerCtaDismissed: false,

  skipChat: () =>
    set({
      phase: 'app',
      chatComplete: true,
      transitionComplete: true,
    }),

  completeChatSequence: () =>
    set({
      phase: 'transition',
      chatComplete: true,
    }),

  completeTransition: () =>
    set({
      phase: 'app',
      transitionComplete: true,
    }),

  dismissOwnerCta: () => {
    sessionStorage.setItem('btr_owner_cta_dismissed', '1')
    set({ ownerCtaDismissed: true })
  },
}))
