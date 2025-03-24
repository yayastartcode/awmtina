import React from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

// Define component for FeaturePoint
const FeaturePoint = ({ heading, description }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm mb-4">
      <h3 className="font-medium text-xl">{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

// Define component for CallToAction
const CallToAction = ({ text, url, style = 'primary' }) => {
  const styles = {
    primary: "bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors",
    secondary: "bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
  };
  
  return (
    <div className="mt-10 text-center">
      <a href={url} className={styles[style]}>
        {text}
      </a>
    </div>
  );
};

// Define custom renderers for basic markdown elements if needed
const HeadingRenderer = props => {
  const { level, children } = props;
  const Tag = `h${level}`;
  const className = {
    1: "text-3xl font-bold mt-8 mb-4",
    2: "text-2xl font-semibold mt-6 mb-3",
    3: "text-xl font-medium mt-4 mb-2",
    4: "text-lg font-medium mt-3 mb-2",
    5: "text-base font-medium mt-2 mb-1",
    6: "text-sm font-medium mt-2 mb-1"
  }[level];

  return <Tag className={className}>{children}</Tag>;
};

// Define the components object with all templates and optional element overrides
const components = {
  // Custom templates defined in schema
  FeaturePoint,
  CallToAction,
  
  // Optional: override basic markdown elements
  h1: props => <HeadingRenderer level={1} {...props} />,
  h2: props => <HeadingRenderer level={2} {...props} />,
  h3: props => <HeadingRenderer level={3} {...props} />,
  h4: props => <HeadingRenderer level={4} {...props} />,
  h5: props => <HeadingRenderer level={5} {...props} />,
  h6: props => <HeadingRenderer level={6} {...props} />,
  
  // Example of styling links
  a: props => (
    <a 
      className="text-blue-600 hover:text-blue-800 underline" 
      href={props.url} 
      target={props.url?.startsWith('http') ? '_blank' : undefined}
      rel={props.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {props.children}
    </a>
  ),
  
  // Styling for lists
  ul: props => <ul className="list-disc pl-6 my-4 space-y-2">{props.children}</ul>,
  ol: props => <ol className="list-decimal pl-6 my-4 space-y-2">{props.children}</ol>,
  
  // Styling for paragraphs
  p: props => <p className="my-3">{props.children}</p>
};

// TinaContent component to handle markdown rendering
export default function TinaContent({ content }) {
  if (!content) return null;
  
  return (
    <div className="tina-content prose max-w-none">
      <TinaMarkdown content={content} components={components} />
    </div>
  );
} 