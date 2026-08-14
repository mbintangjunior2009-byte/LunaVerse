import React from 'react';
import MultipleChoice from './MultipleChoice';
import TypingQuestion from './TypingQuestion';
import AudioQuestion from './AudioQuestion';
import MatchingQuestion from './MatchingQuestion';
import SentenceBuilder from './SentenceBuilder';
import Flashcard from './Flashcard';
import WritingQuestion from './WritingQuestion';

/**
 * Question Renderer Component
 * Routes to appropriate question type component
 */
export default function QuestionRenderer({ 
    question, 
    onAnswer, 
    isAnswered,
    showFeedback 
}) {
    const renderQuestion = () => {
        switch (question.type) {
            case 'multiple-choice':
                return (
                    <MultipleChoice
                        question={question}
                        onAnswer={onAnswer}
                        isAnswered={isAnswered}
                        showFeedback={showFeedback}
                    />
                );
            
            case 'typing':
                return (
                    <TypingQuestion
                        question={question}
                        onAnswer={onAnswer}
                        isAnswered={isAnswered}
                        showFeedback={showFeedback}
                    />
                );
            
            case 'audio':
                return (
                    <AudioQuestion
                        question={question}
                        onAnswer={onAnswer}
                        isAnswered={isAnswered}
                        showFeedback={showFeedback}
                    />
                );
            
            case 'matching':
                return (
                    <MatchingQuestion
                        question={question}
                        onAnswer={onAnswer}
                        isAnswered={isAnswered}
                        showFeedback={showFeedback}
                    />
                );
            
            case 'sentence-ordering':
                return (
                    <SentenceBuilder
                        question={question}
                        onAnswer={onAnswer}
                        isAnswered={isAnswered}
                        showFeedback={showFeedback}
                    />
                );
            
            case 'flashcard':
                return (
                    <Flashcard
                        question={question}
                        onAnswer={onAnswer}
                        isAnswered={isAnswered}
                    />
                );
            
            case 'writing':
                return (
                    <WritingQuestion
                        question={question}
                        onAnswer={onAnswer}
                        isAnswered={isAnswered}
                    />
                );
            
            default:
                return (
                    <div className="text-center text-gray-400">
                        Unknown question type: {question.type}
                    </div>
                );
        }
    };

    return (
        <div className="w-full">
            {renderQuestion()}
        </div>
    );
}
