/**
 * Ambient module declaration for @typebot.io/react.
 * The published package references a .d.ts path that does not exist in the
 * installed dist folder, which breaks tsc. This file provides the types so
 * the compiler is satisfied without touching skipLibCheck.
 */
declare module '@typebot.io/react' {
  import type { CSSProperties } from 'react'

  interface IdOption {
    id?: string
  }

  interface ButtonTheme {
    size?: 'large' | 'medium' | (string & {})
    backgroundColor?: string
    iconColor?: string
    customIconSrc?: string
  }

  interface ChatTheme {
    container?: {
      backgroundColor?: string
      maxWidth?: string
      maxHeight?: string
    }
  }

  interface TypebotTheme {
    button?: ButtonTheme
    chat?: ChatTheme
    position?: 'static' | 'fixed'
    width?: string
    zIndex?: number
    placement?: 'left' | 'right'
    [key: string]: unknown
  }

  interface PreviewMessage {
    avatarUrl?: string
    message: string
    autoShowDelay?: number
  }

  interface TypebotBaseProps {
    typebot: string
    prefilledVariables?: Record<string, unknown>
    apiHost?: string
    onNewInputBlock?: (block: unknown) => void
    onAnswer?: (answer: { message: string; blockId: string }) => void
    onInit?: () => void
    onEnd?: () => void
    onClose?: () => void
    onOpen?: () => void
    [key: string]: unknown
  }

  interface BubbleProps extends TypebotBaseProps {
    theme?: TypebotTheme
    previewMessage?: PreviewMessage
    autoShowDelay?: number
  }

  interface PopupProps extends TypebotBaseProps {
    theme?: Omit<TypebotTheme, 'button' | 'position'>
    autoShowDelay?: number
    isOpen?: boolean
    onClose?: () => void
  }

  interface StandardProps extends TypebotBaseProps {
    theme?: Omit<TypebotTheme, 'button' | 'position'>
    style?: CSSProperties
    className?: string
  }

  export function Bubble(props: BubbleProps): JSX.Element | null
  export function Popup(props: PopupProps): JSX.Element
  export function Standard(props: StandardProps): JSX.Element

  export function open(options?: IdOption): void
  export function close(options?: IdOption): void
  export function toggle(options?: IdOption): void
  export function reload(options?: IdOption): void
  export function reset(options?: IdOption): void
  export function unmount(options?: IdOption): void
  export function submitInput(options?: IdOption): void
  export function hidePreviewMessage(options?: IdOption): void
  export function sendCommand(text: string, options?: IdOption): void
  export function setInputValue(value: string, options?: IdOption): void
  export function setPrefilledVariables(
    variables: Record<string, unknown>,
    options?: IdOption,
  ): void
  export function showPreviewMessage(
    message: PreviewMessage,
    options?: IdOption,
  ): void
  export function resolveButtonSize(
    size: 'large' | 'medium' | string,
  ): string
}
