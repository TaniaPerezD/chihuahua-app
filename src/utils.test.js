import { describe, it, expect } from 'vitest'
import { saludar, sumar } from './utils.js'

describe('saludar', () => {
  it('devuelve un saludo con el nombre', () => {
    expect(saludar('Chihuahua')).toBe('Hola, Chihuahua!')
  })
})

describe('sumar', () => {
  it('suma dos números correctamente', () => {
    expect(sumar(2, 3)).toBe(5)
  })

  it('suma negativos', () => {
    expect(sumar(-1, -1)).toBe(-2)
  })
})
