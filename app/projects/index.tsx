import reactLogo from '~/images/react-logo.svg'
import solidLogo from '~/images/solid-logo.svg'
import vueLogo from '~/images/vue-logo.svg'
import angularLogo from '~/images/angular-logo.svg'
import svelteLogo from '~/images/svelte-logo.svg'
import litLogo from '~/images/lit-logo.svg'
import qwikLogo from '~/images/qwik-logo.svg'
import jsLogo from '~/images/js-logo.svg'
import { queryProject } from './query'
import { formProject } from './form'
import { configProject } from './config'
import { routerProject } from './router'
import { startProject } from './start'
import { tableProject } from './table'
import { virtualProject } from './virtual'
import { rangerProject } from './ranger'
import { storeProject } from './store'
import invariant from 'tiny-invariant'

export const frameworkOptions = [
  { label: 'React', value: 'react', logo: reactLogo },
  { label: 'Vue', value: 'vue', logo: vueLogo },
  { label: 'Angular', value: 'angular', logo: angularLogo },
  { label: 'Solid', value: 'solid', logo: solidLogo },
  { label: 'Lit', value: 'lit', logo: litLogo },
  { label: 'Svelte', value: 'svelte', logo: svelteLogo },
  { label: 'Qwik', value: 'qwik', logo: qwikLogo },
  { label: 'Vanilla', value: 'vanilla', logo: jsLogo },
] as const

export type Framework = (typeof frameworkOptions)[number]['value']

export type Library = {
  name: string
  cardStyles: string
  to: string
  tagline: string
  description: string
  bgStyle: string
  textStyle: string
  badge?: 'new' | 'soon'
  repo: string
  latestBranch: string
  latestVersion: string
  availableVersions: string[]
  colorFrom: string
  colorTo: string
  textColor: string
  frameworks: Framework[]
}

export const projects = [
  queryProject,
  routerProject,
  startProject,
  tableProject,
  formProject,
  virtualProject,
  rangerProject,
  storeProject,
  configProject,
]

export function getFrameworkOptions(frameworkStrs: Framework[]) {
  return frameworkOptions.filter((d) => frameworkStrs.includes(d.value))
}

export function getBranch(library: Library, argVersion?: string) {
  const version = argVersion || library.latestVersion

  const resolvedVersion = ['latest', library.latestVersion].includes(version)
    ? library.latestBranch
    : version

  invariant(resolvedVersion, `Could not resolve version for ${library.name}`)

  return resolvedVersion
}
