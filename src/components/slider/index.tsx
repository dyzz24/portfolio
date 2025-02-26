import React, { useEffect, useRef, useState } from 'react'
import { FRRImg } from '../FRRImg'

const calculateCurrentStep = (step: number, arrLength: number) => {
    const currentStep: number = step % arrLength
    if (currentStep === 0) return 0
    else if (currentStep < 0) return arrLength + currentStep
    else return step > 0 ? Math.abs(currentStep) : arrLength - 1 + currentStep
}

let touchDirection = 0
export const Slider: React.FC<ISlider> = ({ slides }) => {
    const moveSliderRef = useRef<HTMLDivElement | null>(null)
    const [step, setStep] = useState(0)

    const handleClick = (value: number) => {
        const currentStep = calculateCurrentStep(step + value, slides.length)
        setStep(currentStep)
    }

    const touchStartEvent = (e: React.TouchEvent<HTMLDivElement>) => {
        touchDirection = e.touches[0].clientX
    }

    const touchMoveEvent = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!touchDirection) return
        const currentTouch = e.touches[0].clientX
        const direction = touchDirection - currentTouch
        if (direction > 0) {
            handleClick(1)
        } else {
            handleClick(-1)
        }
        touchDirection = 0
    }

    useEffect(() => {
        requestAnimationFrame(() => {
            if (moveSliderRef.current)
                moveSliderRef.current.style.transform = `translateX(${-step * 100}%)`
        })
    }, [step])

    return (
        <>
            <div
                className="slider_block"
                onTouchStart={touchStartEvent}
                onTouchMove={touchMoveEvent}
            >
                {slides.length > 1 && (
                    <div
                        className="slider__control_left"
                        onClick={() => handleClick(-1)}
                    >
                        <svg
                            width="22"
                            height="40"
                            viewBox="0 0 22 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="anim_svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M21.1945 1.55546C20.1206 0.481514 18.3794 0.481514 17.3055 1.55546L0.805457 18.0555C-0.268485 19.1294 -0.268485 20.8706 0.805457 21.9445L17.3055 38.4445C18.3794 39.5185 20.1206 39.5185 21.1945 38.4445C22.2685 37.3706 22.2685 35.6294 21.1945 34.5555L6.63909 20L21.1945 5.44454C22.2685 4.3706 22.2685 2.6294 21.1945 1.55546Z"
                                fill="white"
                                fillOpacity="0"
                            />
                        </svg>
                    </div>
                )}
                <div className="slider_wrapper" ref={moveSliderRef}>
                    {slides.map((el, idx) => (
                        <FRRImg
                            key={el}
                            alt={'slide'}
                            src={el}
                            className="slid"
                        />
                    ))}
                </div>
                {slides.length > 1 && (
                    <div
                        className="slider__control_right"
                        onClick={() => handleClick(1)}
                    >
                        <svg
                            width="22"
                            height="40"
                            viewBox="0 0 22 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="anim_svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.805456 1.55546C1.8794 0.481514 3.6206 0.481514 4.69454 1.55546L21.1945 18.0555C22.2685 19.1294 22.2685 20.8706 21.1945 21.9445L4.69454 38.4445C3.6206 39.5185 1.8794 39.5185 0.805456 38.4445C-0.268486 37.3706 -0.268486 35.6294 0.805456 34.5555L15.3609 20L0.805456 5.44454C-0.268486 4.3706 -0.268486 2.6294 0.805456 1.55546Z"
                                fill="white"
                                fillOpacity="0"
                            />
                        </svg>
                    </div>
                )}
            </div>

            {slides.length > 1 && (
                <div className="slider__btn_block">
                    {slides.map((el, idx) => (
                        <div
                            key={idx}
                            className={`slider_btn   ${idx === step ? 'active' : ''}`}
                            onClick={() => setStep(idx)}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

interface ISlider {
    slides: string[]
}
