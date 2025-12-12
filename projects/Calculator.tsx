'use client'

import { useState } from 'react'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num)
      setWaitingForNewValue(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.')
      setWaitingForNewValue(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForNewValue(false)
  }

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForNewValue(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '*':
        return firstValue * secondValue
      case '/':
        return firstValue / secondValue
      case '=':
        return secondValue
      default:
        return secondValue
    }
  }

  const handleEquals = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForNewValue(true)
    }
  }

  return (
    <div className="w-full max-w-xs mx-auto scale-90">
      <div className="glass-dark rounded-2xl p-4 space-y-3">
        {/* Display Screen */}
        <div className="glass rounded-xl p-4 min-h-[70px] flex items-center justify-end bg-black/40 border-2 border-cyan-400/50 mb-2">
          <div className="text-3xl font-mono text-white font-bold w-full text-right overflow-hidden">
            {display}
          </div>
        </div>
        
        {/* Button Grid */}
        <div 
          className="grid gap-2"
          style={{
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: 'minmax(45px, auto)'
          }}
        >
          <button
            onClick={clear}
            className="glass rounded-lg p-2 text-white font-semibold hover:scale-105 transition-transform text-sm"
            style={{ gridColumn: 'span 2' }}
          >
            Clear
          </button>
          <button
            onClick={() => performOperation('/')}
            className="glass rounded-lg p-2 text-cyan-300 font-semibold hover:scale-105 transition-transform text-xl"
          >
            ÷
          </button>
          <button
            onClick={() => performOperation('*')}
            className="glass rounded-lg p-2 text-cyan-300 font-semibold hover:scale-105 transition-transform text-xl"
          >
            ×
          </button>
          
          <button
            onClick={() => inputNumber('7')}
            className="glass rounded-lg p-2 text-white font-semibold hover:scale-105 transition-transform text-xl"
          >
            7
          </button>
          <button
            onClick={() => inputNumber('8')}
            className="glass rounded-lg p-2 text-white font-semibold hover:scale-105 transition-transform text-xl"
          >
            8
          </button>
          <button
            onClick={() => inputNumber('9')}
            className="glass rounded-lg p-2 text-white font-semibold hover:scale-105 transition-transform text-xl"
          >
            9
          </button>
          <button
            onClick={() => performOperation('-')}
            className="glass rounded-lg p-2 text-cyan-300 font-semibold hover:scale-105 transition-transform text-xl"
          >
            −
          </button>
          
          <button
            onClick={() => inputNumber('4')}
            className="glass rounded-lg p-2 text-white font-semibold hover:scale-105 transition-transform text-xl"
          >
            4
          </button>
          <button
            onClick={() => inputNumber('5')}
            className="glass rounded-lg p-2 text-white font-semibold hover:scale-105 transition-transform text-xl"
          >
            5
          </button>
          <button
            onClick={() => inputNumber('6')}
            className="glass rounded-lg p-2 text-white font-semibold hover:scale-105 transition-transform text-xl"
          >
            6
          </button>
          <button
            onClick={() => performOperation('+')}
            className="glass rounded-lg p-2 text-cyan-300 font-semibold hover:scale-105 transition-transform text-xl"
          >
            +
          </button>
          
          <button
            onClick={() => inputNumber('1')}
            className="glass rounded-lg p-2 text-white font-semibold hover:scale-105 transition-transform text-xl"
          >
            1
          </button>
          <button
            onClick={() => inputNumber('2')}
            className="glass rounded-lg p-2 text-white font-semibold hover:scale-105 transition-transform text-xl"
          >
            2
          </button>
          <button
            onClick={() => inputNumber('3')}
            className="glass rounded-lg p-2 text-white font-semibold hover:scale-105 transition-transform text-xl"
          >
            3
          </button>
          <button
            onClick={handleEquals}
            className="glass rounded-lg p-2 text-cyan-300 font-semibold hover:scale-105 transition-transform text-xl"
            style={{ gridRow: 'span 2' }}
          >
            =
          </button>
          
          <button
            onClick={() => inputNumber('0')}
            className="glass rounded-lg p-2 text-white font-semibold hover:scale-105 transition-transform text-xl"
            style={{ gridColumn: 'span 2' }}
          >
            0
          </button>
          <button
            onClick={inputDecimal}
            className="glass rounded-lg p-2 text-white font-semibold hover:scale-105 transition-transform text-xl"
          >
            .
          </button>
        </div>
      </div>
    </div>
  )
}
