import { Icon } from './style';

const AtomIcon = ({
    icon,
    size,
    href,
    color,
    viewBox,
    background,
    radius
}) => {

    return (
        <Icon
            background={ background }
            radius={ radius }
            href={ href }
        >
            <svg
                viewBox={ viewBox }
                width={`${size}px`}
                height={`${size}px`}
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    fill={ color } 
                    d={ icon }
                ></path>
            </svg>
        </Icon>
    )
}

export default AtomIcon;