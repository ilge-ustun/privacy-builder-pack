import ReactMarkdown from "react-markdown"

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
          p: ({ ...props }) => <p className="mb-6" {...props} />,
          strong: ({ ...props }) => <strong className="font-bold text-white" {...props} />,
          em: ({ ...props }) => <em className="italic text-gray-400" {...props} />,
          a: ({ ...props }) => (
            <a
              className="text-green-400 underline not-italic"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          ul: ({ ...props }) => <ul className="list-disc list-inside mb-4" {...props} />,
          ol: ({ ...props }) => <ol className="list-decimal list-inside mb-4" {...props} />,
          li: ({ ...props }) => <li className="mb-2" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
