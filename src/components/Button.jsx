import { Link } from "react-router-dom";

// Primary Button
export function Button({ btn, to }) {
    return (
        <Link
            to={to}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-primaryDarker"
        >
            {btn}
        </Link>
    )
}

// Outline Button
export function ButtonOutline({ btn, to }) {
    return (
        <Link
            to={to}
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-transparent px-6 py-3.5 text-sm font-medium text-textBody hover:text-textNeural transition-colors hover:bg-primaryDarker"
        >
            {btn}
        </Link>
    )
}

export function ButtonHeader({ btn, to }) {
    return (
        <Link
            to={to}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-3 py-2.5 text-sm font-light text-white transition-colors hover:bg-primaryDarker"
        >
            {btn}
        </Link>
    )
}