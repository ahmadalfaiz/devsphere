// ============================================================
// src/registry/lessons/pythonLessons.js
// STUB — same shape as htmlLessons.js, empty until you fill it in.
// lessonRegistry.js can safely import this right now without
// breaking anything; it'll just show 0 lessons for Python until
// you add sections here.
// ============================================================

import { STATUS } from "../../config/constants";

export const tutorialInfo = {
  id: "deep-learning",
  title: "DL Tutorial",
  shortTitle: "Deep Learning",
  category: "Artificial Intelligence and Machine Learning",
  description: "Master deep learning from beginner to advanced with a comprehensive tutorial covering neural networks, perceptrons, backpropagation, activation functions, optimization, regularization, CNNs, RNNs, LSTMs, attention mechanisms, transformers, transfer learning, generative models, model training, evaluation, and real-world deep learning applications.",
  icon: "deep-learning",
  difficulty: "Advanced", // course-level badge, separate from per-section defaults
  estimatedHours: 52,
  totalLessons: 148,
  version: "Latest Version",
  language: "English",
  path: "/deep-learning",
  authorId: "faiz",
  updatedAt: "2026-07-09",
  tags: ["deep learning", "deep learning tutorial", "neural networks", "artificial intelligence", "ai", "machine learning", "deep neural networks", "perceptron", "backpropagation", "activation functions", "gradient descent", "optimization", "regularization", "convolutional neural networks", "cnn", "recurrent neural networks", "rnn", "lstm", "gru", "attention mechanism", "transformers", "transfer learning", "generative ai", "generative models", "computer vision", "natural language processing", "tensorflow", "keras", "pytorch", "python deep learning", "model training", "model evaluation"],
  seo: {
    title: "Deep Learning Tutorial - Learn Deep Learning from Beginner to Advanced | DevSphere",
    description: "Learn deep learning from scratch with a complete tutorial covering neural networks, backpropagation, CNNs, RNNs, LSTMs, transformers, attention, optimization, transfer learning, generative AI, TensorFlow, Keras, PyTorch, and real-world deep learning applications.",
    keywords: ["Deep Learning Tutorial", "Deep Learning Tutorial for Beginners", "Learn Deep Learning", "Deep Learning Course", "Deep Learning for Beginners", "Deep Learning with Python", "Python Deep Learning", "Deep Learning Basics", "Deep Learning Fundamentals", "Deep Learning Algorithms", "Artificial Intelligence", "AI Tutorial", "Machine Learning and Deep Learning", "Neural Networks", "Neural Network Tutorial", "Artificial Neural Network", "Deep Neural Network", "DNN", "Perceptron", "Multilayer Perceptron", "MLP", "Forward Propagation", "Backpropagation", "Backpropagation Algorithm", "Activation Functions", "ReLU", "Sigmoid Function", "Softmax", "Gradient Descent", "Stochastic Gradient Descent", "SGD", "Optimization in Deep Learning", "Loss Functions", "Regularization", "Dropout", "Batch Normalization", "Overfitting in Deep Learning", "Convolutional Neural Network", "CNN", "CNN Tutorial", "CNN Image Classification", "Computer Vision", "Recurrent Neural Network", "RNN", "RNN Tutorial", "LSTM", "LSTM Tutorial", "GRU", "Sequence Models", "Attention Mechanism", "Attention in Deep Learning", "Self Attention", "Transformer", "Transformer Architecture", "Transformers in Deep Learning", "Transfer Learning", "Fine Tuning", "Pretrained Models", "Generative AI", "Generative Deep Learning", "Generative Models", "Autoencoders", "Variational Autoencoder", "VAE", "GAN", "Generative Adversarial Networks", "Deep Learning for NLP", "Natural Language Processing", "Deep Learning for Computer Vision", "TensorFlow Tutorial", "Keras Tutorial", "PyTorch Tutorial", "Deep Learning with TensorFlow", "Deep Learning with Keras", "Deep Learning with PyTorch", "Deep Learning Projects", "Deep Learning Applications", "Deep Learning Model Training", "Deep Learning Model Evaluation", "Deep Learning Model Deployment", "DevSphere"]
  }
};

export const sections = [
  { id: "introduction-to-deep-learning", title: "Introduction to Deep Learning", order: 1, difficulty: "Beginner", lessons: [
    { id: 1, order: 1, slug: "deep-learning-what-is-deep-learning", title: "What Is Deep Learning?", shortTitle: "What Is Deep Learning?", readingTime: 12, tags: ["deep learning", "introduction", "ai"], status: STATUS.PUBLISHED, featured: true, description: "Learn what deep learning is and how it powers modern AI systems.", prerequisites: [], related: ["deep-learning-ai-vs-machine-learning-vs-deep-learning", "deep-learning-how-deep-learning-works"], recommended: ["deep-learning-why-neural-networks-are-useful", "deep-learning-types-of-deep-learning-models"] },
    { id: 2, order: 2, slug: "deep-learning-ai-vs-machine-learning-vs-deep-learning", title: "AI vs Machine Learning vs Deep Learning", shortTitle: "AI vs ML vs DL", readingTime: 10, tags: ["deep learning", "ai", "machine learning"], status: STATUS.PUBLISHED, featured: true, description: "Understand how artificial intelligence, machine learning, and deep learning relate to each other.", prerequisites: ["deep-learning-what-is-deep-learning", "deep-learning-how-deep-learning-works"], related: ["deep-learning-what-is-deep-learning", "deep-learning-types-of-deep-learning-models"], recommended: ["deep-learning-how-deep-learning-works", "deep-learning-why-neural-networks-are-useful"] },
    { id: 3, order: 3, slug: "deep-learning-how-deep-learning-works", title: "How Deep Learning Works", shortTitle: "How It Works", readingTime: 12, tags: ["deep learning", "neural networks", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Get a high-level look at how deep learning models learn from data.", prerequisites: ["deep-learning-what-is-deep-learning", "deep-learning-ai-vs-machine-learning-vs-deep-learning"], related: ["deep-learning-why-neural-networks-are-useful", "deep-learning-what-is-an-artificial-neural-network"], recommended: ["deep-learning-why-neural-networks-are-useful", "deep-learning-types-of-deep-learning-models"] },
    { id: 4, order: 4, slug: "deep-learning-why-neural-networks-are-useful", title: "Why Neural Networks Are Useful", shortTitle: "Why Neural Networks Matter", readingTime: 10, tags: ["deep learning", "neural networks", "motivation"], status: STATUS.PUBLISHED, featured: true, description: "Learn why neural networks are so effective at solving complex real-world problems.", prerequisites: ["deep-learning-how-deep-learning-works", "deep-learning-ai-vs-machine-learning-vs-deep-learning"], related: ["deep-learning-types-of-deep-learning-models", "deep-learning-real-world-applications-of-deep-learning"], recommended: ["deep-learning-real-world-applications-of-deep-learning", "deep-learning-what-is-an-artificial-neural-network"] },
    { id: 5, order: 5, slug: "deep-learning-types-of-deep-learning-models", title: "Types of Deep Learning Models", shortTitle: "Types of DL Models", readingTime: 12, tags: ["deep learning", "models", "overview"], status: STATUS.PUBLISHED, featured: true, description: "Get an overview of the major categories of deep learning models used today.", prerequisites: ["deep-learning-why-neural-networks-are-useful", "deep-learning-how-deep-learning-works"], related: ["deep-learning-real-world-applications-of-deep-learning", "deep-learning-challenges-and-limitations-of-deep-learning"], recommended: ["deep-learning-real-world-applications-of-deep-learning", "deep-learning-introduction-to-cnns"] },
    { id: 6, order: 6, slug: "deep-learning-real-world-applications-of-deep-learning", title: "Real-World Applications of Deep Learning", shortTitle: "Real-World Applications", readingTime: 12, tags: ["deep learning", "applications", "industry"], status: STATUS.PUBLISHED, featured: true, description: "Explore real-world applications of deep learning across industries.", prerequisites: ["deep-learning-types-of-deep-learning-models", "deep-learning-why-neural-networks-are-useful"], related: ["deep-learning-types-of-deep-learning-models", "deep-learning-challenges-and-limitations-of-deep-learning"], recommended: ["deep-learning-challenges-and-limitations-of-deep-learning", "deep-learning-mathematics-required-for-deep-learning"] },
    { id: 7, order: 7, slug: "deep-learning-challenges-and-limitations-of-deep-learning", title: "Challenges and Limitations of Deep Learning", shortTitle: "Challenges & Limitations", readingTime: 12, tags: ["deep learning", "challenges", "limitations"], status: STATUS.PUBLISHED, featured: true, description: "Learn about the practical challenges and limitations of deep learning models.", prerequisites: ["deep-learning-real-world-applications-of-deep-learning", "deep-learning-types-of-deep-learning-models"], related: ["deep-learning-real-world-applications-of-deep-learning", "deep-learning-mathematics-required-for-deep-learning"], recommended: ["deep-learning-mathematics-required-for-deep-learning", "deep-learning-what-is-an-artificial-neural-network"] }
  ]},
 
  { id: "mathematical-foundations", title: "Mathematical Foundations for Deep Learning", order: 2, difficulty: "Beginner", lessons: [
    { id: 8, order: 1, slug: "deep-learning-mathematics-required-for-deep-learning", title: "Mathematics Required for Deep Learning", shortTitle: "Math You Need", readingTime: 12, tags: ["deep learning", "mathematics", "foundations"], status: STATUS.PUBLISHED, featured: true, description: "Get an overview of the core math topics needed to understand deep learning.", prerequisites: ["deep-learning-challenges-and-limitations-of-deep-learning", "deep-learning-real-world-applications-of-deep-learning"], related: ["deep-learning-vectors-and-matrices", "deep-learning-probability-fundamentals"], recommended: ["deep-learning-vectors-and-matrices", "deep-learning-derivatives-and-gradients"] },
    { id: 9, order: 2, slug: "deep-learning-vectors-and-matrices", title: "Vectors and Matrices", shortTitle: "Vectors & Matrices", readingTime: 12, tags: ["deep learning", "linear algebra", "vectors"], status: STATUS.PUBLISHED, featured: true, description: "Learn the basics of vectors and matrices used throughout deep learning.", prerequisites: ["deep-learning-mathematics-required-for-deep-learning", "deep-learning-challenges-and-limitations-of-deep-learning"], related: ["deep-learning-matrix-operations", "deep-learning-mathematics-required-for-deep-learning"], recommended: ["deep-learning-matrix-operations", "deep-learning-probability-fundamentals"] },
    { id: 10, order: 3, slug: "deep-learning-matrix-operations", title: "Matrix Operations", shortTitle: "Matrix Operations", readingTime: 12, tags: ["deep learning", "linear algebra", "matrix operations"], status: STATUS.PUBLISHED, featured: true, description: "Learn common matrix operations like multiplication and transposition used in neural networks.", prerequisites: ["deep-learning-vectors-and-matrices", "deep-learning-mathematics-required-for-deep-learning"], related: ["deep-learning-vectors-and-matrices", "deep-learning-probability-fundamentals"], recommended: ["deep-learning-probability-fundamentals", "deep-learning-statistics-for-deep-learning"] },
    { id: 11, order: 4, slug: "deep-learning-probability-fundamentals", title: "Probability Fundamentals", shortTitle: "Probability Fundamentals", readingTime: 12, tags: ["deep learning", "probability", "statistics"], status: STATUS.PUBLISHED, featured: true, description: "Learn the probability fundamentals needed to understand deep learning models.", prerequisites: ["deep-learning-matrix-operations", "deep-learning-vectors-and-matrices"], related: ["deep-learning-statistics-for-deep-learning", "deep-learning-matrix-operations"], recommended: ["deep-learning-statistics-for-deep-learning", "deep-learning-derivatives-and-gradients"] },
    { id: 12, order: 5, slug: "deep-learning-statistics-for-deep-learning", title: "Statistics for Deep Learning", shortTitle: "Statistics for DL", readingTime: 12, tags: ["deep learning", "statistics", "data"], status: STATUS.PUBLISHED, featured: true, description: "Learn statistical concepts commonly used when working with deep learning models.", prerequisites: ["deep-learning-probability-fundamentals", "deep-learning-matrix-operations"], related: ["deep-learning-probability-fundamentals", "deep-learning-derivatives-and-gradients"], recommended: ["deep-learning-derivatives-and-gradients", "deep-learning-partial-derivatives-and-the-chain-rule"] },
    { id: 13, order: 6, slug: "deep-learning-derivatives-and-gradients", title: "Derivatives and Gradients", shortTitle: "Derivatives & Gradients", readingTime: 14, tags: ["deep learning", "calculus", "gradients"], status: STATUS.PUBLISHED, featured: true, description: "Learn how derivatives and gradients are used to optimize neural networks.", prerequisites: ["deep-learning-statistics-for-deep-learning", "deep-learning-probability-fundamentals"], related: ["deep-learning-partial-derivatives-and-the-chain-rule", "deep-learning-statistics-for-deep-learning"], recommended: ["deep-learning-partial-derivatives-and-the-chain-rule", "deep-learning-understanding-loss-functions-mathematically"] },
    { id: 14, order: 7, slug: "deep-learning-partial-derivatives-and-the-chain-rule", title: "Partial Derivatives and the Chain Rule", shortTitle: "Chain Rule", readingTime: 14, tags: ["deep learning", "calculus", "chain rule"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the chain rule enables backpropagation through partial derivatives.", prerequisites: ["deep-learning-derivatives-and-gradients", "deep-learning-statistics-for-deep-learning"], related: ["deep-learning-derivatives-and-gradients", "deep-learning-understanding-loss-functions-mathematically"], recommended: ["deep-learning-understanding-loss-functions-mathematically", "deep-learning-backpropagation"] },
    { id: 15, order: 8, slug: "deep-learning-understanding-loss-functions-mathematically", title: "Understanding Loss Functions Mathematically", shortTitle: "Loss Functions (Math)", readingTime: 14, tags: ["deep learning", "loss functions", "mathematics"], status: STATUS.PUBLISHED, featured: true, description: "Understand the mathematical foundations behind common deep learning loss functions.", prerequisites: ["deep-learning-partial-derivatives-and-the-chain-rule", "deep-learning-derivatives-and-gradients"], related: ["deep-learning-partial-derivatives-and-the-chain-rule", "deep-learning-loss-and-cost-functions"], recommended: ["deep-learning-loss-and-cost-functions", "deep-learning-what-is-an-artificial-neural-network"] }
  ]},
 
  { id: "neural-network-fundamentals", title: "Neural Network Fundamentals", order: 3, difficulty: "Beginner", lessons: [
    { id: 16, order: 1, slug: "deep-learning-what-is-an-artificial-neural-network", title: "What Is an Artificial Neural Network?", shortTitle: "What Is an ANN?", readingTime: 12, tags: ["deep learning", "neural networks", "basics"], status: STATUS.PUBLISHED, featured: true, description: "Learn what an artificial neural network is and how it's structured.", prerequisites: ["deep-learning-understanding-loss-functions-mathematically", "deep-learning-mathematics-required-for-deep-learning"], related: ["deep-learning-biological-vs-artificial-neurons", "deep-learning-perceptrons"], recommended: ["deep-learning-biological-vs-artificial-neurons", "deep-learning-neural-network-architecture"] },
    { id: 17, order: 2, slug: "deep-learning-biological-vs-artificial-neurons", title: "Biological vs Artificial Neurons", shortTitle: "Biological vs Artificial Neurons", readingTime: 10, tags: ["deep learning", "neurons", "biology"], status: STATUS.PUBLISHED, featured: true, description: "Compare biological neurons to the artificial neurons used in neural networks.", prerequisites: ["deep-learning-what-is-an-artificial-neural-network", "deep-learning-understanding-loss-functions-mathematically"], related: ["deep-learning-what-is-an-artificial-neural-network", "deep-learning-perceptrons"], recommended: ["deep-learning-perceptrons", "deep-learning-neural-network-architecture"] },
    { id: 18, order: 3, slug: "deep-learning-perceptrons", title: "Perceptrons", shortTitle: "Perceptrons", readingTime: 12, tags: ["deep learning", "perceptron", "neural networks"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the perceptron, the simplest neural network unit, works.", prerequisites: ["deep-learning-biological-vs-artificial-neurons", "deep-learning-what-is-an-artificial-neural-network"], related: ["deep-learning-neural-network-architecture", "deep-learning-layers-weights-and-biases"], recommended: ["deep-learning-neural-network-architecture", "deep-learning-activation-functions"] },
    { id: 19, order: 4, slug: "deep-learning-neural-network-architecture", title: "Neural Network Architecture", shortTitle: "Network Architecture", readingTime: 12, tags: ["deep learning", "architecture", "neural networks"], status: STATUS.PUBLISHED, featured: true, description: "Learn how layers of neurons are organized to form a neural network.", prerequisites: ["deep-learning-perceptrons", "deep-learning-biological-vs-artificial-neurons"], related: ["deep-learning-layers-weights-and-biases", "deep-learning-activation-functions"], recommended: ["deep-learning-layers-weights-and-biases", "deep-learning-forward-propagation"] },
    { id: 20, order: 5, slug: "deep-learning-layers-weights-and-biases", title: "Layers, Weights and Biases", shortTitle: "Layers, Weights & Biases", readingTime: 12, tags: ["deep learning", "weights", "biases"], status: STATUS.PUBLISHED, featured: true, description: "Learn how layers, weights, and biases work together inside a neural network.", prerequisites: ["deep-learning-neural-network-architecture", "deep-learning-perceptrons"], related: ["deep-learning-activation-functions", "deep-learning-forward-propagation"], recommended: ["deep-learning-activation-functions", "deep-learning-common-activation-functions-relu-sigmoid-and-tanh"] },
    { id: 21, order: 6, slug: "deep-learning-activation-functions", title: "Activation Functions", shortTitle: "Activation Functions", readingTime: 12, tags: ["deep learning", "activation functions", "neural networks"], status: STATUS.PUBLISHED, featured: true, description: "Learn why activation functions introduce non-linearity into neural networks.", prerequisites: ["deep-learning-layers-weights-and-biases", "deep-learning-neural-network-architecture"], related: ["deep-learning-common-activation-functions-relu-sigmoid-and-tanh", "deep-learning-forward-propagation"], recommended: ["deep-learning-common-activation-functions-relu-sigmoid-and-tanh", "deep-learning-forward-propagation"] },
    { id: 22, order: 7, slug: "deep-learning-common-activation-functions-relu-sigmoid-and-tanh", title: "Common Activation Functions: ReLU, Sigmoid and Tanh", shortTitle: "ReLU, Sigmoid & Tanh", readingTime: 12, tags: ["deep learning", "relu", "sigmoid"], status: STATUS.PUBLISHED, featured: true, description: "Learn the most commonly used activation functions: ReLU, Sigmoid, and Tanh.", prerequisites: ["deep-learning-activation-functions", "deep-learning-layers-weights-and-biases"], related: ["deep-learning-activation-functions", "deep-learning-forward-propagation"], recommended: ["deep-learning-forward-propagation", "deep-learning-loss-and-cost-functions"] },
    { id: 23, order: 8, slug: "deep-learning-forward-propagation", title: "Forward Propagation", shortTitle: "Forward Propagation", readingTime: 12, tags: ["deep learning", "forward propagation", "neural networks"], status: STATUS.PUBLISHED, featured: true, description: "Learn how data flows forward through a neural network to produce predictions.", prerequisites: ["deep-learning-common-activation-functions-relu-sigmoid-and-tanh", "deep-learning-activation-functions"], related: ["deep-learning-loss-and-cost-functions", "deep-learning-building-a-simple-neural-network-from-scratch"], recommended: ["deep-learning-loss-and-cost-functions", "deep-learning-building-a-simple-neural-network-from-scratch"] },
    { id: 24, order: 9, slug: "deep-learning-loss-and-cost-functions", title: "Loss and Cost Functions", shortTitle: "Loss & Cost Functions", readingTime: 12, tags: ["deep learning", "loss functions", "cost functions"], status: STATUS.PUBLISHED, featured: true, description: "Learn how loss and cost functions measure how well a neural network is performing.", prerequisites: ["deep-learning-forward-propagation", "deep-learning-common-activation-functions-relu-sigmoid-and-tanh"], related: ["deep-learning-understanding-loss-functions-mathematically", "deep-learning-building-a-simple-neural-network-from-scratch"], recommended: ["deep-learning-building-a-simple-neural-network-from-scratch", "deep-learning-how-neural-networks-learn"] },
    { id: 25, order: 10, slug: "deep-learning-building-a-simple-neural-network-from-scratch", title: "Building a Simple Neural Network from Scratch", shortTitle: "Build a Neural Network (Scratch)", readingTime: 20, tags: ["deep learning", "practice", "neural networks"], status: STATUS.PUBLISHED, featured: true, description: "Build a simple neural network from scratch to solidify your understanding of the fundamentals.", prerequisites: ["deep-learning-loss-and-cost-functions", "deep-learning-forward-propagation"], related: ["deep-learning-how-neural-networks-learn", "deep-learning-gradient-descent"], recommended: ["deep-learning-how-neural-networks-learn", "deep-learning-gradient-descent"] }
  ]},
 
  { id: "training-neural-networks", title: "Training Neural Networks", order: 4, difficulty: "Intermediate", lessons: [
    { id: 26, order: 1, slug: "deep-learning-how-neural-networks-learn", title: "How Neural Networks Learn", shortTitle: "How Networks Learn", readingTime: 12, tags: ["deep learning", "training", "learning"], status: STATUS.PUBLISHED, featured: true, description: "Get an overview of how neural networks learn from data through training.", prerequisites: ["deep-learning-building-a-simple-neural-network-from-scratch", "deep-learning-loss-and-cost-functions"], related: ["deep-learning-gradient-descent", "deep-learning-backpropagation"], recommended: ["deep-learning-gradient-descent", "deep-learning-backpropagation"] },
    { id: 27, order: 2, slug: "deep-learning-gradient-descent", title: "Gradient Descent", shortTitle: "Gradient Descent", readingTime: 14, tags: ["deep learning", "gradient descent", "optimization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how gradient descent minimizes a neural network's loss function.", prerequisites: ["deep-learning-how-neural-networks-learn", "deep-learning-building-a-simple-neural-network-from-scratch"], related: ["deep-learning-learning-rate", "deep-learning-backpropagation"], recommended: ["deep-learning-learning-rate", "deep-learning-backpropagation"] },
    { id: 28, order: 3, slug: "deep-learning-learning-rate", title: "Learning Rate", shortTitle: "Learning Rate", readingTime: 10, tags: ["deep learning", "learning rate", "hyperparameters"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the learning rate controls the speed and stability of training.", prerequisites: ["deep-learning-gradient-descent", "deep-learning-how-neural-networks-learn"], related: ["deep-learning-gradient-descent", "deep-learning-learning-rate-scheduling"], recommended: ["deep-learning-backpropagation", "deep-learning-learning-rate-scheduling"] },
    { id: 29, order: 4, slug: "deep-learning-backpropagation", title: "Backpropagation", shortTitle: "Backpropagation", readingTime: 16, tags: ["deep learning", "backpropagation", "training"], status: STATUS.PUBLISHED, featured: true, description: "Learn how backpropagation computes gradients to update a neural network's weights.", prerequisites: ["deep-learning-learning-rate", "deep-learning-gradient-descent"], related: ["deep-learning-computing-gradients", "deep-learning-updating-weights-and-biases"], recommended: ["deep-learning-computing-gradients", "deep-learning-updating-weights-and-biases"] },
    { id: 30, order: 5, slug: "deep-learning-computing-gradients", title: "Computing Gradients", shortTitle: "Computing Gradients", readingTime: 14, tags: ["deep learning", "gradients", "backpropagation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how gradients are computed layer by layer during backpropagation.", prerequisites: ["deep-learning-backpropagation", "deep-learning-learning-rate"], related: ["deep-learning-backpropagation", "deep-learning-updating-weights-and-biases"], recommended: ["deep-learning-updating-weights-and-biases", "deep-learning-batch-mini-batch-and-stochastic-gradient-descent"] },
    { id: 31, order: 6, slug: "deep-learning-updating-weights-and-biases", title: "Updating Weights and Biases", shortTitle: "Updating Weights & Biases", readingTime: 12, tags: ["deep learning", "weights", "training"], status: STATUS.PUBLISHED, featured: true, description: "Learn how weights and biases are updated after gradients are computed.", prerequisites: ["deep-learning-computing-gradients", "deep-learning-backpropagation"], related: ["deep-learning-computing-gradients", "deep-learning-batch-mini-batch-and-stochastic-gradient-descent"], recommended: ["deep-learning-batch-mini-batch-and-stochastic-gradient-descent", "deep-learning-epochs-batches-and-iterations"] },
    { id: 32, order: 7, slug: "deep-learning-batch-mini-batch-and-stochastic-gradient-descent", title: "Batch, Mini-Batch and Stochastic Gradient Descent", shortTitle: "Batch vs Mini-Batch vs SGD", readingTime: 14, tags: ["deep learning", "gradient descent", "batch size"], status: STATUS.PUBLISHED, featured: true, description: "Compare batch, mini-batch, and stochastic gradient descent approaches to training.", prerequisites: ["deep-learning-updating-weights-and-biases", "deep-learning-computing-gradients"], related: ["deep-learning-epochs-batches-and-iterations", "deep-learning-updating-weights-and-biases"], recommended: ["deep-learning-epochs-batches-and-iterations", "deep-learning-training-validation-and-test-sets"] },
    { id: 33, order: 8, slug: "deep-learning-epochs-batches-and-iterations", title: "Epochs, Batches and Iterations", shortTitle: "Epochs, Batches & Iterations", readingTime: 10, tags: ["deep learning", "epochs", "batches"], status: STATUS.PUBLISHED, featured: true, description: "Learn the difference between epochs, batches, and iterations during training.", prerequisites: ["deep-learning-batch-mini-batch-and-stochastic-gradient-descent", "deep-learning-updating-weights-and-biases"], related: ["deep-learning-batch-mini-batch-and-stochastic-gradient-descent", "deep-learning-training-validation-and-test-sets"], recommended: ["deep-learning-training-validation-and-test-sets", "deep-learning-building-a-complete-training-loop"] },
    { id: 34, order: 9, slug: "deep-learning-training-validation-and-test-sets", title: "Training, Validation and Test Sets", shortTitle: "Train/Val/Test Sets", readingTime: 12, tags: ["deep learning", "datasets", "validation"], status: STATUS.PUBLISHED, featured: true, description: "Learn why datasets are split into training, validation, and test sets.", prerequisites: ["deep-learning-epochs-batches-and-iterations", "deep-learning-batch-mini-batch-and-stochastic-gradient-descent"], related: ["deep-learning-epochs-batches-and-iterations", "deep-learning-building-a-complete-training-loop"], recommended: ["deep-learning-building-a-complete-training-loop", "deep-learning-why-optimization-matters"] },
    { id: 35, order: 10, slug: "deep-learning-building-a-complete-training-loop", title: "Building a Complete Training Loop", shortTitle: "Complete Training Loop", readingTime: 20, tags: ["deep learning", "training loop", "practice"], status: STATUS.PUBLISHED, featured: true, description: "Build a complete training loop that brings together forward pass, loss, and backpropagation.", prerequisites: ["deep-learning-training-validation-and-test-sets", "deep-learning-epochs-batches-and-iterations"], related: ["deep-learning-why-optimization-matters", "deep-learning-momentum-optimization"], recommended: ["deep-learning-why-optimization-matters", "deep-learning-momentum-optimization"] }
  ]},
 
  { id: "optimizers-and-training-techniques", title: "Optimizers and Training Techniques", order: 5, difficulty: "Intermediate", lessons: [
    { id: 36, order: 1, slug: "deep-learning-why-optimization-matters", title: "Why Optimization Matters", shortTitle: "Why Optimization Matters", readingTime: 10, tags: ["deep learning", "optimization", "training"], status: STATUS.PUBLISHED, featured: true, description: "Learn why choosing the right optimization algorithm affects model performance.", prerequisites: ["deep-learning-building-a-complete-training-loop", "deep-learning-training-validation-and-test-sets"], related: ["deep-learning-momentum-optimization", "deep-learning-adam-optimizer"], recommended: ["deep-learning-momentum-optimization", "deep-learning-adam-optimizer"] },
    { id: 37, order: 2, slug: "deep-learning-momentum-optimization", title: "Momentum Optimization", shortTitle: "Momentum", readingTime: 12, tags: ["deep learning", "momentum", "optimization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how momentum optimization speeds up convergence during training.", prerequisites: ["deep-learning-why-optimization-matters", "deep-learning-building-a-complete-training-loop"], related: ["deep-learning-adagrad", "deep-learning-rmsprop"], recommended: ["deep-learning-adagrad", "deep-learning-adam-optimizer"] },
    { id: 38, order: 3, slug: "deep-learning-adagrad", title: "AdaGrad", shortTitle: "AdaGrad", readingTime: 12, tags: ["deep learning", "adagrad", "optimization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the AdaGrad optimizer adapts the learning rate for each parameter.", prerequisites: ["deep-learning-momentum-optimization", "deep-learning-why-optimization-matters"], related: ["deep-learning-momentum-optimization", "deep-learning-rmsprop"], recommended: ["deep-learning-rmsprop", "deep-learning-adam-optimizer"] },
    { id: 39, order: 4, slug: "deep-learning-rmsprop", title: "RMSProp", shortTitle: "RMSProp", readingTime: 12, tags: ["deep learning", "rmsprop", "optimization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how RMSProp improves on AdaGrad for training deep networks.", prerequisites: ["deep-learning-adagrad", "deep-learning-momentum-optimization"], related: ["deep-learning-adagrad", "deep-learning-adam-optimizer"], recommended: ["deep-learning-adam-optimizer", "deep-learning-learning-rate-scheduling"] },
    { id: 40, order: 5, slug: "deep-learning-adam-optimizer", title: "Adam Optimizer", shortTitle: "Adam Optimizer", readingTime: 14, tags: ["deep learning", "adam", "optimization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the Adam optimizer combines momentum and adaptive learning rates.", prerequisites: ["deep-learning-rmsprop", "deep-learning-adagrad"], related: ["deep-learning-momentum-optimization", "deep-learning-rmsprop"], recommended: ["deep-learning-learning-rate-scheduling", "deep-learning-weight-initialization"] },
    { id: 41, order: 6, slug: "deep-learning-learning-rate-scheduling", title: "Learning Rate Scheduling", shortTitle: "LR Scheduling", readingTime: 12, tags: ["deep learning", "learning rate", "scheduling"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to adjust the learning rate over the course of training.", prerequisites: ["deep-learning-adam-optimizer", "deep-learning-rmsprop"], related: ["deep-learning-adam-optimizer", "deep-learning-weight-initialization"], recommended: ["deep-learning-weight-initialization", "deep-learning-comparing-optimization-algorithms"] },
    { id: 42, order: 7, slug: "deep-learning-weight-initialization", title: "Weight Initialization", shortTitle: "Weight Initialization", readingTime: 12, tags: ["deep learning", "weight initialization", "training"], status: STATUS.PUBLISHED, featured: true, description: "Learn how proper weight initialization affects training stability and speed.", prerequisites: ["deep-learning-learning-rate-scheduling", "deep-learning-adam-optimizer"], related: ["deep-learning-learning-rate-scheduling", "deep-learning-comparing-optimization-algorithms"], recommended: ["deep-learning-comparing-optimization-algorithms", "deep-learning-underfitting-and-overfitting"] },
    { id: 43, order: 8, slug: "deep-learning-comparing-optimization-algorithms", title: "Comparing Optimization Algorithms", shortTitle: "Comparing Optimizers", readingTime: 14, tags: ["deep learning", "optimizers", "comparison"], status: STATUS.PUBLISHED, featured: true, description: "Compare popular optimization algorithms to understand their trade-offs.", prerequisites: ["deep-learning-weight-initialization", "deep-learning-learning-rate-scheduling"], related: ["deep-learning-adam-optimizer", "deep-learning-weight-initialization"], recommended: ["deep-learning-underfitting-and-overfitting", "deep-learning-bias-variance-tradeoff"] }
  ]},
 
  { id: "preventing-overfitting", title: "Preventing Overfitting", order: 6, difficulty: "Intermediate", lessons: [
    { id: 44, order: 1, slug: "deep-learning-underfitting-and-overfitting", title: "Underfitting and Overfitting", shortTitle: "Underfitting & Overfitting", readingTime: 12, tags: ["deep learning", "overfitting", "underfitting"], status: STATUS.PUBLISHED, featured: true, description: "Learn the difference between underfitting and overfitting in deep learning models.", prerequisites: ["deep-learning-comparing-optimization-algorithms", "deep-learning-weight-initialization"], related: ["deep-learning-bias-variance-tradeoff", "deep-learning-l1-and-l2-regularization"], recommended: ["deep-learning-bias-variance-tradeoff", "deep-learning-dropout"] },
    { id: 45, order: 2, slug: "deep-learning-bias-variance-tradeoff", title: "Bias-Variance Tradeoff", shortTitle: "Bias-Variance Tradeoff", readingTime: 12, tags: ["deep learning", "bias", "variance"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the bias-variance tradeoff explains a model's generalization behavior.", prerequisites: ["deep-learning-underfitting-and-overfitting", "deep-learning-comparing-optimization-algorithms"], related: ["deep-learning-underfitting-and-overfitting", "deep-learning-l1-and-l2-regularization"], recommended: ["deep-learning-l1-and-l2-regularization", "deep-learning-dropout"] },
    { id: 46, order: 3, slug: "deep-learning-l1-and-l2-regularization", title: "L1 and L2 Regularization", shortTitle: "L1 & L2 Regularization", readingTime: 12, tags: ["deep learning", "regularization", "l1 l2"], status: STATUS.PUBLISHED, featured: true, description: "Learn how L1 and L2 regularization help prevent overfitting in neural networks.", prerequisites: ["deep-learning-bias-variance-tradeoff", "deep-learning-underfitting-and-overfitting"], related: ["deep-learning-dropout", "deep-learning-early-stopping"], recommended: ["deep-learning-dropout", "deep-learning-early-stopping"] },
    { id: 47, order: 4, slug: "deep-learning-dropout", title: "Dropout", shortTitle: "Dropout", readingTime: 12, tags: ["deep learning", "dropout", "regularization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how dropout randomly disables neurons during training to reduce overfitting.", prerequisites: ["deep-learning-l1-and-l2-regularization", "deep-learning-bias-variance-tradeoff"], related: ["deep-learning-l1-and-l2-regularization", "deep-learning-early-stopping"], recommended: ["deep-learning-early-stopping", "deep-learning-batch-normalization"] },
    { id: 48, order: 5, slug: "deep-learning-early-stopping", title: "Early Stopping", shortTitle: "Early Stopping", readingTime: 10, tags: ["deep learning", "early stopping", "regularization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how early stopping prevents overfitting by halting training at the right time.", prerequisites: ["deep-learning-dropout", "deep-learning-l1-and-l2-regularization"], related: ["deep-learning-dropout", "deep-learning-batch-normalization"], recommended: ["deep-learning-batch-normalization", "deep-learning-data-augmentation"] },
    { id: 49, order: 6, slug: "deep-learning-batch-normalization", title: "Batch Normalization", shortTitle: "Batch Normalization", readingTime: 14, tags: ["deep learning", "batch normalization", "training"], status: STATUS.PUBLISHED, featured: true, description: "Learn how batch normalization stabilizes and speeds up neural network training.", prerequisites: ["deep-learning-early-stopping", "deep-learning-dropout"], related: ["deep-learning-early-stopping", "deep-learning-data-augmentation"], recommended: ["deep-learning-data-augmentation", "deep-learning-introduction-to-tensorflow"] },
    { id: 50, order: 7, slug: "deep-learning-data-augmentation", title: "Data Augmentation", shortTitle: "Data Augmentation", readingTime: 12, tags: ["deep learning", "data augmentation", "regularization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how data augmentation artificially expands a training dataset to reduce overfitting.", prerequisites: ["deep-learning-batch-normalization", "deep-learning-early-stopping"], related: ["deep-learning-batch-normalization", "deep-learning-data-augmentation-for-computer-vision"], recommended: ["deep-learning-introduction-to-tensorflow", "deep-learning-introduction-to-pytorch"] }
  ]},
 
  { id: "deep-learning-with-tensorflow-keras", title: "Deep Learning with TensorFlow & Keras", order: 7, difficulty: "Intermediate", lessons: [
    { id: 51, order: 1, slug: "deep-learning-introduction-to-tensorflow", title: "Introduction to TensorFlow", shortTitle: "TensorFlow Intro", readingTime: 14, tags: ["deep learning", "tensorflow", "frameworks"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to TensorFlow, one of the most popular deep learning frameworks.", prerequisites: ["deep-learning-data-augmentation", "deep-learning-batch-normalization"], related: ["deep-learning-introduction-to-keras", "deep-learning-tensors-and-tensor-operations"], recommended: ["deep-learning-introduction-to-keras", "deep-learning-tensors-and-tensor-operations"] },
    { id: 52, order: 2, slug: "deep-learning-introduction-to-keras", title: "Introduction to Keras", shortTitle: "Keras Intro", readingTime: 12, tags: ["deep learning", "keras", "frameworks"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to Keras, a high-level API for building neural networks in TensorFlow.", prerequisites: ["deep-learning-introduction-to-tensorflow", "deep-learning-data-augmentation"], related: ["deep-learning-introduction-to-tensorflow", "deep-learning-building-neural-networks-with-keras"], recommended: ["deep-learning-building-neural-networks-with-keras", "deep-learning-tensors-and-tensor-operations"] },
    { id: 53, order: 3, slug: "deep-learning-tensors-and-tensor-operations", title: "Tensors and Tensor Operations", shortTitle: "Tensors & Operations", readingTime: 12, tags: ["deep learning", "tensors", "tensorflow"], status: STATUS.PUBLISHED, featured: true, description: "Learn how tensors represent data and how tensor operations power deep learning computations.", prerequisites: ["deep-learning-introduction-to-keras", "deep-learning-introduction-to-tensorflow"], related: ["deep-learning-introduction-to-tensorflow", "deep-learning-building-neural-networks-with-keras"], recommended: ["deep-learning-building-neural-networks-with-keras", "deep-learning-training-and-evaluating-models"] },
    { id: 54, order: 4, slug: "deep-learning-building-neural-networks-with-keras", title: "Building Neural Networks with Keras", shortTitle: "Build Networks (Keras)", readingTime: 16, tags: ["deep learning", "keras", "practice"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build neural networks using the Keras Sequential and Functional APIs.", prerequisites: ["deep-learning-tensors-and-tensor-operations", "deep-learning-introduction-to-keras"], related: ["deep-learning-training-and-evaluating-models", "deep-learning-callbacks-and-model-saving"], recommended: ["deep-learning-training-and-evaluating-models", "deep-learning-callbacks-and-model-saving"] },
    { id: 55, order: 5, slug: "deep-learning-training-and-evaluating-models", title: "Training and Evaluating Models", shortTitle: "Training & Evaluating (Keras)", readingTime: 14, tags: ["deep learning", "keras", "evaluation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to train and evaluate Keras models using the fit and evaluate methods.", prerequisites: ["deep-learning-building-neural-networks-with-keras", "deep-learning-tensors-and-tensor-operations"], related: ["deep-learning-callbacks-and-model-saving", "deep-learning-building-an-end-to-end-tensorflow-project"], recommended: ["deep-learning-callbacks-and-model-saving", "deep-learning-building-an-end-to-end-tensorflow-project"] },
    { id: 56, order: 6, slug: "deep-learning-callbacks-and-model-saving", title: "Callbacks and Model Saving", shortTitle: "Callbacks & Model Saving", readingTime: 12, tags: ["deep learning", "keras", "callbacks"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use callbacks and save trained models in Keras.", prerequisites: ["deep-learning-training-and-evaluating-models", "deep-learning-building-neural-networks-with-keras"], related: ["deep-learning-training-and-evaluating-models", "deep-learning-building-an-end-to-end-tensorflow-project"], recommended: ["deep-learning-building-an-end-to-end-tensorflow-project", "deep-learning-introduction-to-pytorch"] },
    { id: 57, order: 7, slug: "deep-learning-building-an-end-to-end-tensorflow-project", title: "Building an End-to-End TensorFlow Project", shortTitle: "End-to-End TensorFlow Project", readingTime: 22, tags: ["deep learning", "tensorflow", "project"], status: STATUS.PUBLISHED, featured: true, description: "Build a complete end-to-end deep learning project using TensorFlow and Keras.", prerequisites: ["deep-learning-callbacks-and-model-saving", "deep-learning-training-and-evaluating-models"], related: ["deep-learning-introduction-to-pytorch", "deep-learning-tensors-in-pytorch"], recommended: ["deep-learning-introduction-to-pytorch", "deep-learning-tensors-in-pytorch"] }
  ]},
 
  { id: "deep-learning-with-pytorch", title: "Deep Learning with PyTorch", order: 8, difficulty: "Intermediate", lessons: [
    { id: 58, order: 1, slug: "deep-learning-introduction-to-pytorch", title: "Introduction to PyTorch", shortTitle: "PyTorch Intro", readingTime: 14, tags: ["deep learning", "pytorch", "frameworks"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to PyTorch, a widely used deep learning framework.", prerequisites: ["deep-learning-building-an-end-to-end-tensorflow-project", "deep-learning-callbacks-and-model-saving"], related: ["deep-learning-tensors-in-pytorch", "deep-learning-autograd-and-automatic-differentiation"], recommended: ["deep-learning-tensors-in-pytorch", "deep-learning-autograd-and-automatic-differentiation"] },
    { id: 59, order: 2, slug: "deep-learning-tensors-in-pytorch", title: "Tensors in PyTorch", shortTitle: "PyTorch Tensors", readingTime: 12, tags: ["deep learning", "pytorch", "tensors"], status: STATUS.PUBLISHED, featured: true, description: "Learn how tensors work in PyTorch and how they compare to TensorFlow tensors.", prerequisites: ["deep-learning-introduction-to-pytorch", "deep-learning-building-an-end-to-end-tensorflow-project"], related: ["deep-learning-introduction-to-pytorch", "deep-learning-autograd-and-automatic-differentiation"], recommended: ["deep-learning-autograd-and-automatic-differentiation", "deep-learning-building-neural-networks-with-nn-module"] },
    { id: 60, order: 3, slug: "deep-learning-autograd-and-automatic-differentiation", title: "Autograd and Automatic Differentiation", shortTitle: "Autograd", readingTime: 14, tags: ["deep learning", "pytorch", "autograd"], status: STATUS.PUBLISHED, featured: true, description: "Learn how PyTorch's autograd engine automatically computes gradients.", prerequisites: ["deep-learning-tensors-in-pytorch", "deep-learning-introduction-to-pytorch"], related: ["deep-learning-tensors-in-pytorch", "deep-learning-building-neural-networks-with-nn-module"], recommended: ["deep-learning-building-neural-networks-with-nn-module", "deep-learning-pytorch-datasets-and-dataloaders"] },
    { id: 61, order: 4, slug: "deep-learning-building-neural-networks-with-nn-module", title: "Building Neural Networks with nn.Module", shortTitle: "Networks with nn.Module", readingTime: 16, tags: ["deep learning", "pytorch", "nn.module"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build neural networks in PyTorch using the nn.Module class.", prerequisites: ["deep-learning-autograd-and-automatic-differentiation", "deep-learning-tensors-in-pytorch"], related: ["deep-learning-pytorch-datasets-and-dataloaders", "deep-learning-training-and-evaluation-loops"], recommended: ["deep-learning-pytorch-datasets-and-dataloaders", "deep-learning-training-and-evaluation-loops"] },
    { id: 62, order: 5, slug: "deep-learning-pytorch-datasets-and-dataloaders", title: "PyTorch Datasets and DataLoaders", shortTitle: "Datasets & DataLoaders", readingTime: 14, tags: ["deep learning", "pytorch", "datasets"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use PyTorch Datasets and DataLoaders to efficiently feed data into a model.", prerequisites: ["deep-learning-building-neural-networks-with-nn-module", "deep-learning-autograd-and-automatic-differentiation"], related: ["deep-learning-building-neural-networks-with-nn-module", "deep-learning-training-and-evaluation-loops"], recommended: ["deep-learning-training-and-evaluation-loops", "deep-learning-saving-and-loading-pytorch-models"] },
    { id: 63, order: 6, slug: "deep-learning-training-and-evaluation-loops", title: "Training and Evaluation Loops", shortTitle: "Training & Eval Loops (PyTorch)", readingTime: 16, tags: ["deep learning", "pytorch", "training"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to write training and evaluation loops manually in PyTorch.", prerequisites: ["deep-learning-pytorch-datasets-and-dataloaders", "deep-learning-building-neural-networks-with-nn-module"], related: ["deep-learning-pytorch-datasets-and-dataloaders", "deep-learning-saving-and-loading-pytorch-models"], recommended: ["deep-learning-saving-and-loading-pytorch-models", "deep-learning-building-an-end-to-end-pytorch-project"] },
    { id: 64, order: 7, slug: "deep-learning-saving-and-loading-pytorch-models", title: "Saving and Loading PyTorch Models", shortTitle: "Save & Load PyTorch Models", readingTime: 12, tags: ["deep learning", "pytorch", "model saving"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to save and load trained PyTorch models for later use.", prerequisites: ["deep-learning-training-and-evaluation-loops", "deep-learning-pytorch-datasets-and-dataloaders"], related: ["deep-learning-training-and-evaluation-loops", "deep-learning-building-an-end-to-end-pytorch-project"], recommended: ["deep-learning-building-an-end-to-end-pytorch-project", "deep-learning-introduction-to-cnns"] },
    { id: 65, order: 8, slug: "deep-learning-building-an-end-to-end-pytorch-project", title: "Building an End-to-End PyTorch Project", shortTitle: "End-to-End PyTorch Project", readingTime: 22, tags: ["deep learning", "pytorch", "project"], status: STATUS.PUBLISHED, featured: true, description: "Build a complete end-to-end deep learning project using PyTorch.", prerequisites: ["deep-learning-saving-and-loading-pytorch-models", "deep-learning-training-and-evaluation-loops"], related: ["deep-learning-introduction-to-cnns", "deep-learning-why-cnns-work-for-images"], recommended: ["deep-learning-introduction-to-cnns", "deep-learning-why-cnns-work-for-images"] }
  ]},
 
  { id: "convolutional-neural-networks", title: "Convolutional Neural Networks", order: 9, difficulty: "Advanced", lessons: [
    { id: 66, order: 1, slug: "deep-learning-introduction-to-cnns", title: "Introduction to CNNs", shortTitle: "CNN Intro", readingTime: 14, tags: ["deep learning", "cnn", "computer vision"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to Convolutional Neural Networks and why they excel at image tasks.", prerequisites: ["deep-learning-building-an-end-to-end-pytorch-project", "deep-learning-saving-and-loading-pytorch-models"], related: ["deep-learning-why-cnns-work-for-images", "deep-learning-convolution-operation"], recommended: ["deep-learning-why-cnns-work-for-images", "deep-learning-convolution-operation"] },
    { id: 67, order: 2, slug: "deep-learning-why-cnns-work-for-images", title: "Why CNNs Work for Images", shortTitle: "Why CNNs Work for Images", readingTime: 12, tags: ["deep learning", "cnn", "computer vision"], status: STATUS.PUBLISHED, featured: true, description: "Learn why convolutional architectures are especially suited to image data.", prerequisites: ["deep-learning-introduction-to-cnns", "deep-learning-building-an-end-to-end-pytorch-project"], related: ["deep-learning-introduction-to-cnns", "deep-learning-convolution-operation"], recommended: ["deep-learning-convolution-operation", "deep-learning-filters-kernels-and-feature-maps"] },
    { id: 68, order: 3, slug: "deep-learning-convolution-operation", title: "Convolution Operation", shortTitle: "Convolution Operation", readingTime: 14, tags: ["deep learning", "cnn", "convolution"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the convolution operation extracts features from images.", prerequisites: ["deep-learning-why-cnns-work-for-images", "deep-learning-introduction-to-cnns"], related: ["deep-learning-filters-kernels-and-feature-maps", "deep-learning-stride-and-padding"], recommended: ["deep-learning-filters-kernels-and-feature-maps", "deep-learning-stride-and-padding"] },
    { id: 69, order: 4, slug: "deep-learning-filters-kernels-and-feature-maps", title: "Filters, Kernels and Feature Maps", shortTitle: "Filters, Kernels & Feature Maps", readingTime: 12, tags: ["deep learning", "cnn", "filters"], status: STATUS.PUBLISHED, featured: true, description: "Learn how filters and kernels produce feature maps in a CNN.", prerequisites: ["deep-learning-convolution-operation", "deep-learning-why-cnns-work-for-images"], related: ["deep-learning-convolution-operation", "deep-learning-stride-and-padding"], recommended: ["deep-learning-stride-and-padding", "deep-learning-pooling-layers"] },
    { id: 70, order: 5, slug: "deep-learning-stride-and-padding", title: "Stride and Padding", shortTitle: "Stride & Padding", readingTime: 10, tags: ["deep learning", "cnn", "stride"], status: STATUS.PUBLISHED, featured: true, description: "Learn how stride and padding control the output size of convolutional layers.", prerequisites: ["deep-learning-filters-kernels-and-feature-maps", "deep-learning-convolution-operation"], related: ["deep-learning-filters-kernels-and-feature-maps", "deep-learning-pooling-layers"], recommended: ["deep-learning-pooling-layers", "deep-learning-building-a-cnn"] },
    { id: 71, order: 6, slug: "deep-learning-pooling-layers", title: "Pooling Layers", shortTitle: "Pooling Layers", readingTime: 10, tags: ["deep learning", "cnn", "pooling"], status: STATUS.PUBLISHED, featured: true, description: "Learn how pooling layers downsample feature maps in a CNN.", prerequisites: ["deep-learning-stride-and-padding", "deep-learning-filters-kernels-and-feature-maps"], related: ["deep-learning-stride-and-padding", "deep-learning-building-a-cnn"], recommended: ["deep-learning-building-a-cnn", "deep-learning-cnn-training-and-evaluation"] },
    { id: 72, order: 7, slug: "deep-learning-building-a-cnn", title: "Building a CNN", shortTitle: "Build a CNN", readingTime: 18, tags: ["deep learning", "cnn", "practice"], status: STATUS.PUBLISHED, featured: true, description: "Build a convolutional neural network from the ground up.", prerequisites: ["deep-learning-pooling-layers", "deep-learning-stride-and-padding"], related: ["deep-learning-cnn-training-and-evaluation", "deep-learning-transfer-learning"], recommended: ["deep-learning-cnn-training-and-evaluation", "deep-learning-transfer-learning"] },
    { id: 73, order: 8, slug: "deep-learning-cnn-training-and-evaluation", title: "CNN Training and Evaluation", shortTitle: "CNN Training & Evaluation", readingTime: 16, tags: ["deep learning", "cnn", "evaluation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to train and evaluate a CNN on an image dataset.", prerequisites: ["deep-learning-building-a-cnn", "deep-learning-pooling-layers"], related: ["deep-learning-building-a-cnn", "deep-learning-transfer-learning"], recommended: ["deep-learning-transfer-learning", "deep-learning-image-classification-with-cnns"] },
    { id: 74, order: 9, slug: "deep-learning-transfer-learning", title: "Transfer Learning", shortTitle: "Transfer Learning", readingTime: 14, tags: ["deep learning", "transfer learning", "cnn"], status: STATUS.PUBLISHED, featured: true, description: "Learn how transfer learning lets you reuse a pretrained model for a new task.", prerequisites: ["deep-learning-cnn-training-and-evaluation", "deep-learning-building-a-cnn"], related: ["deep-learning-cnn-training-and-evaluation", "deep-learning-image-classification-with-cnns"], recommended: ["deep-learning-image-classification-with-cnns", "deep-learning-transfer-learning-with-pretrained-models"] },
    { id: 75, order: 10, slug: "deep-learning-image-classification-with-cnns", title: "Image Classification with CNNs", shortTitle: "Image Classification (CNNs)", readingTime: 20, tags: ["deep learning", "cnn", "image classification"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a complete image classification pipeline using CNNs.", prerequisites: ["deep-learning-transfer-learning", "deep-learning-cnn-training-and-evaluation"], related: ["deep-learning-transfer-learning", "deep-learning-image-preprocessing-for-deep-learning"], recommended: ["deep-learning-image-preprocessing-for-deep-learning", "deep-learning-transfer-learning-with-pretrained-models"] }
  ]},
 
  { id: "advanced-computer-vision", title: "Advanced Computer Vision", order: 10, difficulty: "Advanced", lessons: [
    { id: 76, order: 1, slug: "deep-learning-image-preprocessing-for-deep-learning", title: "Image Preprocessing for Deep Learning", shortTitle: "Image Preprocessing", readingTime: 12, tags: ["deep learning", "computer vision", "preprocessing"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to preprocess images before feeding them into a deep learning model.", prerequisites: ["deep-learning-image-classification-with-cnns", "deep-learning-transfer-learning"], related: ["deep-learning-data-augmentation-for-computer-vision", "deep-learning-transfer-learning-with-pretrained-models"], recommended: ["deep-learning-data-augmentation-for-computer-vision", "deep-learning-transfer-learning-with-pretrained-models"] },
    { id: 77, order: 2, slug: "deep-learning-data-augmentation-for-computer-vision", title: "Data Augmentation for Computer Vision", shortTitle: "Data Augmentation (Vision)", readingTime: 12, tags: ["deep learning", "computer vision", "data augmentation"], status: STATUS.PUBLISHED, featured: true, description: "Learn data augmentation techniques specific to computer vision tasks.", prerequisites: ["deep-learning-image-preprocessing-for-deep-learning", "deep-learning-image-classification-with-cnns"], related: ["deep-learning-image-preprocessing-for-deep-learning", "deep-learning-transfer-learning-with-pretrained-models"], recommended: ["deep-learning-transfer-learning-with-pretrained-models", "deep-learning-object-detection"] },
    { id: 78, order: 3, slug: "deep-learning-transfer-learning-with-pretrained-models", title: "Transfer Learning with Pretrained Models", shortTitle: "Transfer Learning (Pretrained)", readingTime: 16, tags: ["deep learning", "transfer learning", "pretrained models"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to fine-tune pretrained models for your own computer vision tasks.", prerequisites: ["deep-learning-data-augmentation-for-computer-vision", "deep-learning-image-preprocessing-for-deep-learning"], related: ["deep-learning-transfer-learning", "deep-learning-object-detection"], recommended: ["deep-learning-object-detection", "deep-learning-image-segmentation"] },
    { id: 79, order: 4, slug: "deep-learning-object-detection", title: "Object Detection", shortTitle: "Object Detection", readingTime: 16, tags: ["deep learning", "computer vision", "object detection"], status: STATUS.PUBLISHED, featured: true, description: "Learn how object detection models locate and classify multiple objects in an image.", prerequisites: ["deep-learning-transfer-learning-with-pretrained-models", "deep-learning-data-augmentation-for-computer-vision"], related: ["deep-learning-image-segmentation", "deep-learning-semantic-vs-instance-segmentation"], recommended: ["deep-learning-image-segmentation", "deep-learning-semantic-vs-instance-segmentation"] },
    { id: 80, order: 5, slug: "deep-learning-image-segmentation", title: "Image Segmentation", shortTitle: "Image Segmentation", readingTime: 16, tags: ["deep learning", "computer vision", "segmentation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how image segmentation classifies every pixel in an image.", prerequisites: ["deep-learning-object-detection", "deep-learning-transfer-learning-with-pretrained-models"], related: ["deep-learning-semantic-vs-instance-segmentation", "deep-learning-object-detection"], recommended: ["deep-learning-semantic-vs-instance-segmentation", "deep-learning-face-recognition-and-image-embeddings"] },
    { id: 81, order: 6, slug: "deep-learning-semantic-vs-instance-segmentation", title: "Semantic vs Instance Segmentation", shortTitle: "Semantic vs Instance Segmentation", readingTime: 14, tags: ["deep learning", "segmentation", "computer vision"], status: STATUS.PUBLISHED, featured: true, description: "Compare semantic segmentation and instance segmentation approaches.", prerequisites: ["deep-learning-image-segmentation", "deep-learning-object-detection"], related: ["deep-learning-image-segmentation", "deep-learning-face-recognition-and-image-embeddings"], recommended: ["deep-learning-face-recognition-and-image-embeddings", "deep-learning-introduction-to-vision-transformers"] },
    { id: 82, order: 7, slug: "deep-learning-face-recognition-and-image-embeddings", title: "Face Recognition and Image Embeddings", shortTitle: "Face Recognition & Embeddings", readingTime: 16, tags: ["deep learning", "face recognition", "embeddings"], status: STATUS.PUBLISHED, featured: true, description: "Learn how image embeddings power face recognition systems.", prerequisites: ["deep-learning-semantic-vs-instance-segmentation", "deep-learning-image-segmentation"], related: ["deep-learning-semantic-vs-instance-segmentation", "deep-learning-introduction-to-vision-transformers"], recommended: ["deep-learning-introduction-to-vision-transformers", "deep-learning-introduction-to-sequence-data"] },
    { id: 83, order: 8, slug: "deep-learning-introduction-to-vision-transformers", title: "Introduction to Vision Transformers", shortTitle: "Vision Transformers", readingTime: 16, tags: ["deep learning", "vision transformers", "computer vision"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to Vision Transformers and how they apply attention to images.", prerequisites: ["deep-learning-face-recognition-and-image-embeddings", "deep-learning-semantic-vs-instance-segmentation"], related: ["deep-learning-face-recognition-and-image-embeddings", "deep-learning-introduction-to-sequence-data"], recommended: ["deep-learning-introduction-to-sequence-data", "deep-learning-recurrent-neural-networks-rnns"] }
  ]},
 
  { id: "recurrent-neural-networks-sequence-models", title: "Recurrent Neural Networks & Sequence Models", order: 11, difficulty: "Advanced", lessons: [
    { id: 84, order: 1, slug: "deep-learning-introduction-to-sequence-data", title: "Introduction to Sequence Data", shortTitle: "Sequence Data Intro", readingTime: 12, tags: ["deep learning", "sequence data", "rnn"], status: STATUS.PUBLISHED, featured: true, description: "Learn what sequence data is and why it requires specialized deep learning models.", prerequisites: ["deep-learning-introduction-to-vision-transformers", "deep-learning-face-recognition-and-image-embeddings"], related: ["deep-learning-recurrent-neural-networks-rnns", "deep-learning-rnn-forward-and-backward-pass"], recommended: ["deep-learning-recurrent-neural-networks-rnns", "deep-learning-rnn-forward-and-backward-pass"] },
    { id: 85, order: 2, slug: "deep-learning-recurrent-neural-networks-rnns", title: "Recurrent Neural Networks (RNNs)", shortTitle: "RNNs", readingTime: 14, tags: ["deep learning", "rnn", "sequence models"], status: STATUS.PUBLISHED, featured: true, description: "Learn how recurrent neural networks process sequential data over time.", prerequisites: ["deep-learning-introduction-to-sequence-data", "deep-learning-introduction-to-vision-transformers"], related: ["deep-learning-rnn-forward-and-backward-pass", "deep-learning-vanishing-and-exploding-gradients"], recommended: ["deep-learning-rnn-forward-and-backward-pass", "deep-learning-vanishing-and-exploding-gradients"] },
    { id: 86, order: 3, slug: "deep-learning-rnn-forward-and-backward-pass", title: "RNN Forward and Backward Pass", shortTitle: "RNN Forward & Backward Pass", readingTime: 14, tags: ["deep learning", "rnn", "backpropagation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how forward and backward passes work through a recurrent neural network.", prerequisites: ["deep-learning-recurrent-neural-networks-rnns", "deep-learning-introduction-to-sequence-data"], related: ["deep-learning-recurrent-neural-networks-rnns", "deep-learning-vanishing-and-exploding-gradients"], recommended: ["deep-learning-vanishing-and-exploding-gradients", "deep-learning-long-short-term-memory-lstm"] },
    { id: 87, order: 4, slug: "deep-learning-vanishing-and-exploding-gradients", title: "Vanishing and Exploding Gradients", shortTitle: "Vanishing/Exploding Gradients", readingTime: 14, tags: ["deep learning", "gradients", "rnn"], status: STATUS.PUBLISHED, featured: true, description: "Learn why vanishing and exploding gradients make RNNs hard to train.", prerequisites: ["deep-learning-rnn-forward-and-backward-pass", "deep-learning-recurrent-neural-networks-rnns"], related: ["deep-learning-rnn-forward-and-backward-pass", "deep-learning-long-short-term-memory-lstm"], recommended: ["deep-learning-long-short-term-memory-lstm", "deep-learning-gated-recurrent-units-grus"] },
    { id: 88, order: 5, slug: "deep-learning-long-short-term-memory-lstm", title: "Long Short-Term Memory (LSTM)", shortTitle: "LSTM", readingTime: 16, tags: ["deep learning", "lstm", "sequence models"], status: STATUS.PUBLISHED, featured: true, description: "Learn how LSTM networks solve the vanishing gradient problem in RNNs.", prerequisites: ["deep-learning-vanishing-and-exploding-gradients", "deep-learning-rnn-forward-and-backward-pass"], related: ["deep-learning-vanishing-and-exploding-gradients", "deep-learning-gated-recurrent-units-grus"], recommended: ["deep-learning-gated-recurrent-units-grus", "deep-learning-bidirectional-rnns"] },
    { id: 89, order: 6, slug: "deep-learning-gated-recurrent-units-grus", title: "Gated Recurrent Units (GRUs)", shortTitle: "GRUs", readingTime: 14, tags: ["deep learning", "gru", "sequence models"], status: STATUS.PUBLISHED, featured: true, description: "Learn how GRUs offer a simpler alternative to LSTMs for sequence modeling.", prerequisites: ["deep-learning-long-short-term-memory-lstm", "deep-learning-vanishing-and-exploding-gradients"], related: ["deep-learning-long-short-term-memory-lstm", "deep-learning-bidirectional-rnns"], recommended: ["deep-learning-bidirectional-rnns", "deep-learning-sequence-classification"] },
    { id: 90, order: 7, slug: "deep-learning-bidirectional-rnns", title: "Bidirectional RNNs", shortTitle: "Bidirectional RNNs", readingTime: 14, tags: ["deep learning", "rnn", "bidirectional"], status: STATUS.PUBLISHED, featured: true, description: "Learn how bidirectional RNNs process sequences in both forward and backward directions.", prerequisites: ["deep-learning-gated-recurrent-units-grus", "deep-learning-long-short-term-memory-lstm"], related: ["deep-learning-gated-recurrent-units-grus", "deep-learning-sequence-classification"], recommended: ["deep-learning-sequence-classification", "deep-learning-time-series-prediction-with-deep-learning"] },
    { id: 91, order: 8, slug: "deep-learning-sequence-classification", title: "Sequence Classification", shortTitle: "Sequence Classification", readingTime: 14, tags: ["deep learning", "sequence models", "classification"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to classify entire sequences using recurrent neural networks.", prerequisites: ["deep-learning-bidirectional-rnns", "deep-learning-gated-recurrent-units-grus"], related: ["deep-learning-bidirectional-rnns", "deep-learning-time-series-prediction-with-deep-learning"], recommended: ["deep-learning-time-series-prediction-with-deep-learning", "deep-learning-introduction-to-deep-learning-for-nlp"] },
    { id: 92, order: 9, slug: "deep-learning-time-series-prediction-with-deep-learning", title: "Time-Series Prediction with Deep Learning", shortTitle: "Time-Series Prediction", readingTime: 18, tags: ["deep learning", "time series", "prediction"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build deep learning models that forecast future values in a time series.", prerequisites: ["deep-learning-sequence-classification", "deep-learning-bidirectional-rnns"], related: ["deep-learning-sequence-classification", "deep-learning-introduction-to-deep-learning-for-nlp"], recommended: ["deep-learning-introduction-to-deep-learning-for-nlp", "deep-learning-text-preprocessing"] }
  ]},
 
  { id: "nlp-with-deep-learning", title: "Natural Language Processing with Deep Learning", order: 12, difficulty: "Advanced", lessons: [
    { id: 93, order: 1, slug: "deep-learning-introduction-to-deep-learning-for-nlp", title: "Introduction to Deep Learning for NLP", shortTitle: "DL for NLP Intro", readingTime: 14, tags: ["deep learning", "nlp", "introduction"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to how deep learning is applied to natural language processing.", prerequisites: ["deep-learning-time-series-prediction-with-deep-learning", "deep-learning-sequence-classification"], related: ["deep-learning-text-preprocessing", "deep-learning-tokenization"], recommended: ["deep-learning-text-preprocessing", "deep-learning-tokenization"] },
    { id: 94, order: 2, slug: "deep-learning-text-preprocessing", title: "Text Preprocessing", shortTitle: "Text Preprocessing", readingTime: 12, tags: ["deep learning", "nlp", "preprocessing"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to preprocess raw text before feeding it into a deep learning model.", prerequisites: ["deep-learning-introduction-to-deep-learning-for-nlp", "deep-learning-time-series-prediction-with-deep-learning"], related: ["deep-learning-tokenization", "deep-learning-word-embeddings"], recommended: ["deep-learning-tokenization", "deep-learning-word-embeddings"] },
    { id: 95, order: 3, slug: "deep-learning-tokenization", title: "Tokenization", shortTitle: "Tokenization", readingTime: 10, tags: ["deep learning", "nlp", "tokenization"], status: STATUS.PUBLISHED, featured: true, description: "Learn how tokenization breaks text into units a model can process.", prerequisites: ["deep-learning-text-preprocessing", "deep-learning-introduction-to-deep-learning-for-nlp"], related: ["deep-learning-text-preprocessing", "deep-learning-word-embeddings"], recommended: ["deep-learning-word-embeddings", "deep-learning-word2vec-and-representation-learning"] },
    { id: 96, order: 4, slug: "deep-learning-word-embeddings", title: "Word Embeddings", shortTitle: "Word Embeddings", readingTime: 14, tags: ["deep learning", "nlp", "embeddings"], status: STATUS.PUBLISHED, featured: true, description: "Learn how word embeddings represent words as dense numerical vectors.", prerequisites: ["deep-learning-tokenization", "deep-learning-text-preprocessing"], related: ["deep-learning-word2vec-and-representation-learning", "deep-learning-sequence-models-for-nlp"], recommended: ["deep-learning-word2vec-and-representation-learning", "deep-learning-sequence-models-for-nlp"] },
    { id: 97, order: 5, slug: "deep-learning-word2vec-and-representation-learning", title: "Word2Vec and Representation Learning", shortTitle: "Word2Vec", readingTime: 14, tags: ["deep learning", "nlp", "word2vec"], status: STATUS.PUBLISHED, featured: true, description: "Learn how Word2Vec learns meaningful word representations from large text corpora.", prerequisites: ["deep-learning-word-embeddings", "deep-learning-tokenization"], related: ["deep-learning-word-embeddings", "deep-learning-sequence-models-for-nlp"], recommended: ["deep-learning-sequence-models-for-nlp", "deep-learning-text-classification-with-neural-networks"] },
    { id: 98, order: 6, slug: "deep-learning-sequence-models-for-nlp", title: "Sequence Models for NLP", shortTitle: "Sequence Models (NLP)", readingTime: 14, tags: ["deep learning", "nlp", "sequence models"], status: STATUS.PUBLISHED, featured: true, description: "Learn how sequence models like RNNs and LSTMs are applied to language tasks.", prerequisites: ["deep-learning-word2vec-and-representation-learning", "deep-learning-word-embeddings"], related: ["deep-learning-text-classification-with-neural-networks", "deep-learning-sentiment-analysis-with-deep-learning"], recommended: ["deep-learning-text-classification-with-neural-networks", "deep-learning-sentiment-analysis-with-deep-learning"] },
    { id: 99, order: 7, slug: "deep-learning-text-classification-with-neural-networks", title: "Text Classification with Neural Networks", shortTitle: "Text Classification", readingTime: 16, tags: ["deep learning", "nlp", "text classification"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a neural network that classifies text into categories.", prerequisites: ["deep-learning-sequence-models-for-nlp", "deep-learning-word2vec-and-representation-learning"], related: ["deep-learning-sequence-models-for-nlp", "deep-learning-sentiment-analysis-with-deep-learning"], recommended: ["deep-learning-sentiment-analysis-with-deep-learning", "deep-learning-why-transformers-were-introduced"] },
    { id: 100, order: 8, slug: "deep-learning-sentiment-analysis-with-deep-learning", title: "Sentiment Analysis with Deep Learning", shortTitle: "Sentiment Analysis", readingTime: 18, tags: ["deep learning", "nlp", "sentiment analysis"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to build a sentiment analysis model using deep learning.", prerequisites: ["deep-learning-text-classification-with-neural-networks", "deep-learning-sequence-models-for-nlp"], related: ["deep-learning-text-classification-with-neural-networks", "deep-learning-why-transformers-were-introduced"], recommended: ["deep-learning-why-transformers-were-introduced", "deep-learning-transformer-architecture"] }
  ]},
 
  { id: "transformers-modern-deep-learning", title: "Transformers & Modern Deep Learning", order: 13, difficulty: "Advanced", lessons: [
    { id: 101, order: 1, slug: "deep-learning-why-transformers-were-introduced", title: "Why Transformers Were Introduced", shortTitle: "Why Transformers?", readingTime: 12, tags: ["deep learning", "transformers", "motivation"], status: STATUS.PUBLISHED, featured: true, description: "Learn why transformers were introduced to overcome the limitations of RNNs.", prerequisites: ["deep-learning-sentiment-analysis-with-deep-learning", "deep-learning-text-classification-with-neural-networks"], related: ["deep-learning-transformer-architecture", "deep-learning-attention-mechanism"], recommended: ["deep-learning-transformer-architecture", "deep-learning-attention-mechanism"] },
    { id: 102, order: 2, slug: "deep-learning-transformer-architecture", title: "Transformer Architecture", shortTitle: "Transformer Architecture", readingTime: 16, tags: ["deep learning", "transformers", "architecture"], status: STATUS.PUBLISHED, featured: true, description: "Learn the overall architecture of the transformer model.", prerequisites: ["deep-learning-why-transformers-were-introduced", "deep-learning-sentiment-analysis-with-deep-learning"], related: ["deep-learning-attention-mechanism", "deep-learning-self-attention"], recommended: ["deep-learning-attention-mechanism", "deep-learning-self-attention"] },
    { id: 103, order: 3, slug: "deep-learning-attention-mechanism", title: "Attention Mechanism", shortTitle: "Attention Mechanism", readingTime: 14, tags: ["deep learning", "attention", "transformers"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the attention mechanism lets models focus on relevant parts of the input.", prerequisites: ["deep-learning-transformer-architecture", "deep-learning-why-transformers-were-introduced"], related: ["deep-learning-self-attention", "deep-learning-multi-head-attention"], recommended: ["deep-learning-self-attention", "deep-learning-multi-head-attention"] },
    { id: 104, order: 4, slug: "deep-learning-self-attention", title: "Self-Attention", shortTitle: "Self-Attention", readingTime: 14, tags: ["deep learning", "self-attention", "transformers"], status: STATUS.PUBLISHED, featured: true, description: "Learn how self-attention lets a sequence attend to itself to capture context.", prerequisites: ["deep-learning-attention-mechanism", "deep-learning-transformer-architecture"], related: ["deep-learning-attention-mechanism", "deep-learning-multi-head-attention"], recommended: ["deep-learning-multi-head-attention", "deep-learning-positional-encoding"] },
    { id: 105, order: 5, slug: "deep-learning-multi-head-attention", title: "Multi-Head Attention", shortTitle: "Multi-Head Attention", readingTime: 14, tags: ["deep learning", "attention", "transformers"], status: STATUS.PUBLISHED, featured: true, description: "Learn how multi-head attention captures different types of relationships in parallel.", prerequisites: ["deep-learning-self-attention", "deep-learning-attention-mechanism"], related: ["deep-learning-self-attention", "deep-learning-positional-encoding"], recommended: ["deep-learning-positional-encoding", "deep-learning-encoder-and-decoder-architecture"] },
    { id: 106, order: 6, slug: "deep-learning-positional-encoding", title: "Positional Encoding", shortTitle: "Positional Encoding", readingTime: 12, tags: ["deep learning", "positional encoding", "transformers"], status: STATUS.PUBLISHED, featured: true, description: "Learn how positional encoding gives transformers a sense of word order.", prerequisites: ["deep-learning-multi-head-attention", "deep-learning-self-attention"], related: ["deep-learning-multi-head-attention", "deep-learning-encoder-and-decoder-architecture"], recommended: ["deep-learning-encoder-and-decoder-architecture", "deep-learning-bert-and-encoder-based-models"] },
    { id: 107, order: 7, slug: "deep-learning-encoder-and-decoder-architecture", title: "Encoder and Decoder Architecture", shortTitle: "Encoder & Decoder", readingTime: 14, tags: ["deep learning", "transformers", "encoder-decoder"], status: STATUS.PUBLISHED, featured: true, description: "Learn how the encoder and decoder components work together in a transformer.", prerequisites: ["deep-learning-positional-encoding", "deep-learning-multi-head-attention"], related: ["deep-learning-bert-and-encoder-based-models", "deep-learning-gpt-and-decoder-based-models"], recommended: ["deep-learning-bert-and-encoder-based-models", "deep-learning-gpt-and-decoder-based-models"] },
    { id: 108, order: 8, slug: "deep-learning-bert-and-encoder-based-models", title: "BERT and Encoder-Based Models", shortTitle: "BERT", readingTime: 16, tags: ["deep learning", "bert", "transformers"], status: STATUS.PUBLISHED, featured: true, description: "Learn how BERT and other encoder-based models understand language context.", prerequisites: ["deep-learning-encoder-and-decoder-architecture", "deep-learning-positional-encoding"], related: ["deep-learning-encoder-and-decoder-architecture", "deep-learning-gpt-and-decoder-based-models"], recommended: ["deep-learning-gpt-and-decoder-based-models", "deep-learning-introduction-to-large-language-models"] },
    { id: 109, order: 9, slug: "deep-learning-gpt-and-decoder-based-models", title: "GPT and Decoder-Based Models", shortTitle: "GPT", readingTime: 16, tags: ["deep learning", "gpt", "transformers"], status: STATUS.PUBLISHED, featured: true, description: "Learn how GPT and other decoder-based models generate text one token at a time.", prerequisites: ["deep-learning-bert-and-encoder-based-models", "deep-learning-encoder-and-decoder-architecture"], related: ["deep-learning-bert-and-encoder-based-models", "deep-learning-introduction-to-large-language-models"], recommended: ["deep-learning-introduction-to-large-language-models", "deep-learning-introduction-to-generative-models"] },
    { id: 110, order: 10, slug: "deep-learning-introduction-to-large-language-models", title: "Introduction to Large Language Models", shortTitle: "LLMs Intro", readingTime: 16, tags: ["deep learning", "llm", "transformers"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to large language models and how they're trained at scale.", prerequisites: ["deep-learning-gpt-and-decoder-based-models", "deep-learning-bert-and-encoder-based-models"], related: ["deep-learning-gpt-and-decoder-based-models", "deep-learning-introduction-to-generative-models"], recommended: ["deep-learning-introduction-to-generative-models", "deep-learning-autoencoders"] }
  ]},
 
  { id: "generative-deep-learning", title: "Generative Deep Learning", order: 14, difficulty: "Advanced", lessons: [
    { id: 111, order: 1, slug: "deep-learning-introduction-to-generative-models", title: "Introduction to Generative Models", shortTitle: "Generative Models Intro", readingTime: 14, tags: ["deep learning", "generative models", "ai"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to generative models and how they create new data.", prerequisites: ["deep-learning-introduction-to-large-language-models", "deep-learning-gpt-and-decoder-based-models"], related: ["deep-learning-autoencoders", "deep-learning-variational-autoencoders-vaes"], recommended: ["deep-learning-autoencoders", "deep-learning-variational-autoencoders-vaes"] },
    { id: 112, order: 2, slug: "deep-learning-autoencoders", title: "Autoencoders", shortTitle: "Autoencoders", readingTime: 14, tags: ["deep learning", "autoencoders", "generative models"], status: STATUS.PUBLISHED, featured: true, description: "Learn how autoencoders learn to compress and reconstruct data.", prerequisites: ["deep-learning-introduction-to-generative-models", "deep-learning-introduction-to-large-language-models"], related: ["deep-learning-variational-autoencoders-vaes", "deep-learning-generative-adversarial-networks-gans"], recommended: ["deep-learning-variational-autoencoders-vaes", "deep-learning-generative-adversarial-networks-gans"] },
    { id: 113, order: 3, slug: "deep-learning-variational-autoencoders-vaes", title: "Variational Autoencoders (VAEs)", shortTitle: "VAEs", readingTime: 16, tags: ["deep learning", "vae", "generative models"], status: STATUS.PUBLISHED, featured: true, description: "Learn how variational autoencoders generate new data by learning a probabilistic latent space.", prerequisites: ["deep-learning-autoencoders", "deep-learning-introduction-to-generative-models"], related: ["deep-learning-autoencoders", "deep-learning-generative-adversarial-networks-gans"], recommended: ["deep-learning-generative-adversarial-networks-gans", "deep-learning-gan-architecture-and-training"] },
    { id: 114, order: 4, slug: "deep-learning-generative-adversarial-networks-gans", title: "Generative Adversarial Networks (GANs)", shortTitle: "GANs", readingTime: 16, tags: ["deep learning", "gan", "generative models"], status: STATUS.PUBLISHED, featured: true, description: "Learn how GANs use a generator and discriminator to create realistic synthetic data.", prerequisites: ["deep-learning-variational-autoencoders-vaes", "deep-learning-autoencoders"], related: ["deep-learning-gan-architecture-and-training", "deep-learning-diffusion-models"], recommended: ["deep-learning-gan-architecture-and-training", "deep-learning-diffusion-models"] },
    { id: 115, order: 5, slug: "deep-learning-gan-architecture-and-training", title: "GAN Architecture and Training", shortTitle: "GAN Architecture & Training", readingTime: 18, tags: ["deep learning", "gan", "training"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to architect and train a GAN's generator and discriminator networks.", prerequisites: ["deep-learning-generative-adversarial-networks-gans", "deep-learning-variational-autoencoders-vaes"], related: ["deep-learning-generative-adversarial-networks-gans", "deep-learning-diffusion-models"], recommended: ["deep-learning-diffusion-models", "deep-learning-text-to-image-generation"] },
    { id: 116, order: 6, slug: "deep-learning-diffusion-models", title: "Diffusion Models", shortTitle: "Diffusion Models", readingTime: 16, tags: ["deep learning", "diffusion models", "generative ai"], status: STATUS.PUBLISHED, featured: true, description: "Learn how diffusion models generate images by gradually denoising random noise.", prerequisites: ["deep-learning-gan-architecture-and-training", "deep-learning-generative-adversarial-networks-gans"], related: ["deep-learning-gan-architecture-and-training", "deep-learning-text-to-image-generation"], recommended: ["deep-learning-text-to-image-generation", "deep-learning-introduction-to-multimodal-generative-models"] },
    { id: 117, order: 7, slug: "deep-learning-text-to-image-generation", title: "Text-to-Image Generation", shortTitle: "Text-to-Image Generation", readingTime: 16, tags: ["deep learning", "generative ai", "text-to-image"], status: STATUS.PUBLISHED, featured: true, description: "Learn how text-to-image models translate written prompts into generated images.", prerequisites: ["deep-learning-diffusion-models", "deep-learning-gan-architecture-and-training"], related: ["deep-learning-diffusion-models", "deep-learning-introduction-to-multimodal-generative-models"], recommended: ["deep-learning-introduction-to-multimodal-generative-models", "deep-learning-representation-learning"] },
    { id: 118, order: 8, slug: "deep-learning-introduction-to-multimodal-generative-models", title: "Introduction to Multimodal Generative Models", shortTitle: "Multimodal Generative Models", readingTime: 16, tags: ["deep learning", "multimodal", "generative ai"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to multimodal generative models that combine text, image, and audio.", prerequisites: ["deep-learning-text-to-image-generation", "deep-learning-diffusion-models"], related: ["deep-learning-text-to-image-generation", "deep-learning-representation-learning"], recommended: ["deep-learning-representation-learning", "deep-learning-self-supervised-learning"] }
  ]},
 
  { id: "advanced-deep-learning-concepts", title: "Advanced Deep Learning Concepts", order: 15, difficulty: "Advanced", lessons: [
    { id: 119, order: 1, slug: "deep-learning-representation-learning", title: "Representation Learning", shortTitle: "Representation Learning", readingTime: 14, tags: ["deep learning", "representation learning", "features"], status: STATUS.PUBLISHED, featured: true, description: "Learn how representation learning automatically discovers useful features from raw data.", prerequisites: ["deep-learning-introduction-to-multimodal-generative-models", "deep-learning-text-to-image-generation"], related: ["deep-learning-self-supervised-learning", "deep-learning-semi-supervised-learning"], recommended: ["deep-learning-self-supervised-learning", "deep-learning-semi-supervised-learning"] },
    { id: 120, order: 2, slug: "deep-learning-self-supervised-learning", title: "Self-Supervised Learning", shortTitle: "Self-Supervised Learning", readingTime: 14, tags: ["deep learning", "self-supervised learning", "training"], status: STATUS.PUBLISHED, featured: true, description: "Learn how self-supervised learning creates training signals from unlabeled data.", prerequisites: ["deep-learning-representation-learning", "deep-learning-introduction-to-multimodal-generative-models"], related: ["deep-learning-representation-learning", "deep-learning-semi-supervised-learning"], recommended: ["deep-learning-semi-supervised-learning", "deep-learning-few-shot-and-zero-shot-learning"] },
    { id: 121, order: 3, slug: "deep-learning-semi-supervised-learning", title: "Semi-Supervised Learning", shortTitle: "Semi-Supervised Learning", readingTime: 14, tags: ["deep learning", "semi-supervised learning", "training"], status: STATUS.PUBLISHED, featured: true, description: "Learn how semi-supervised learning combines labeled and unlabeled data during training.", prerequisites: ["deep-learning-self-supervised-learning", "deep-learning-representation-learning"], related: ["deep-learning-self-supervised-learning", "deep-learning-few-shot-and-zero-shot-learning"], recommended: ["deep-learning-few-shot-and-zero-shot-learning", "deep-learning-fine-tuning-neural-networks"] },
    { id: 122, order: 4, slug: "deep-learning-few-shot-and-zero-shot-learning", title: "Few-Shot and Zero-Shot Learning", shortTitle: "Few-Shot & Zero-Shot Learning", readingTime: 14, tags: ["deep learning", "few-shot learning", "zero-shot learning"], status: STATUS.PUBLISHED, featured: true, description: "Learn how models can generalize to new tasks with little or no labeled data.", prerequisites: ["deep-learning-semi-supervised-learning", "deep-learning-self-supervised-learning"], related: ["deep-learning-semi-supervised-learning", "deep-learning-fine-tuning-neural-networks"], recommended: ["deep-learning-fine-tuning-neural-networks", "deep-learning-knowledge-distillation"] },
    { id: 123, order: 5, slug: "deep-learning-fine-tuning-neural-networks", title: "Fine-Tuning Neural Networks", shortTitle: "Fine-Tuning", readingTime: 14, tags: ["deep learning", "fine-tuning", "transfer learning"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to fine-tune a pretrained neural network for a new, specific task.", prerequisites: ["deep-learning-few-shot-and-zero-shot-learning", "deep-learning-semi-supervised-learning"], related: ["deep-learning-few-shot-and-zero-shot-learning", "deep-learning-knowledge-distillation"], recommended: ["deep-learning-knowledge-distillation", "deep-learning-explainability-and-interpretability"] },
    { id: 124, order: 6, slug: "deep-learning-knowledge-distillation", title: "Knowledge Distillation", shortTitle: "Knowledge Distillation", readingTime: 14, tags: ["deep learning", "knowledge distillation", "model compression"], status: STATUS.PUBLISHED, featured: true, description: "Learn how knowledge distillation transfers knowledge from a large model to a smaller one.", prerequisites: ["deep-learning-fine-tuning-neural-networks", "deep-learning-few-shot-and-zero-shot-learning"], related: ["deep-learning-fine-tuning-neural-networks", "deep-learning-explainability-and-interpretability"], recommended: ["deep-learning-explainability-and-interpretability", "deep-learning-evaluating-deep-learning-models"] },
    { id: 125, order: 7, slug: "deep-learning-explainability-and-interpretability", title: "Explainability and Interpretability", shortTitle: "Explainability & Interpretability", readingTime: 14, tags: ["deep learning", "explainability", "interpretability"], status: STATUS.PUBLISHED, featured: true, description: "Learn techniques for explaining and interpreting the decisions made by deep learning models.", prerequisites: ["deep-learning-knowledge-distillation", "deep-learning-fine-tuning-neural-networks"], related: ["deep-learning-knowledge-distillation", "deep-learning-evaluating-deep-learning-models"], recommended: ["deep-learning-evaluating-deep-learning-models", "deep-learning-classification-and-regression-metrics"] }
  ]},
 
  { id: "model-evaluation-debugging", title: "Deep Learning Model Evaluation & Debugging", order: 16, difficulty: "Advanced", lessons: [
    { id: 126, order: 1, slug: "deep-learning-evaluating-deep-learning-models", title: "Evaluating Deep Learning Models", shortTitle: "Evaluating DL Models", readingTime: 14, tags: ["deep learning", "evaluation", "metrics"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to properly evaluate the performance of deep learning models.", prerequisites: ["deep-learning-explainability-and-interpretability", "deep-learning-knowledge-distillation"], related: ["deep-learning-classification-and-regression-metrics", "deep-learning-validation-curves-and-learning-curves"], recommended: ["deep-learning-classification-and-regression-metrics", "deep-learning-validation-curves-and-learning-curves"] },
    { id: 127, order: 2, slug: "deep-learning-classification-and-regression-metrics", title: "Classification and Regression Metrics", shortTitle: "Classification & Regression Metrics", readingTime: 14, tags: ["deep learning", "metrics", "evaluation"], status: STATUS.PUBLISHED, featured: true, description: "Learn common metrics used to evaluate classification and regression models.", prerequisites: ["deep-learning-evaluating-deep-learning-models", "deep-learning-explainability-and-interpretability"], related: ["deep-learning-evaluating-deep-learning-models", "deep-learning-validation-curves-and-learning-curves"], recommended: ["deep-learning-validation-curves-and-learning-curves", "deep-learning-diagnosing-training-problems"] },
    { id: 128, order: 3, slug: "deep-learning-validation-curves-and-learning-curves", title: "Validation Curves and Learning Curves", shortTitle: "Validation & Learning Curves", readingTime: 12, tags: ["deep learning", "learning curves", "validation"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to use validation and learning curves to diagnose model performance.", prerequisites: ["deep-learning-classification-and-regression-metrics", "deep-learning-evaluating-deep-learning-models"], related: ["deep-learning-classification-and-regression-metrics", "deep-learning-diagnosing-training-problems"], recommended: ["deep-learning-diagnosing-training-problems", "deep-learning-error-analysis"] },
    { id: 129, order: 4, slug: "deep-learning-diagnosing-training-problems", title: "Diagnosing Training Problems", shortTitle: "Diagnosing Training Problems", readingTime: 14, tags: ["deep learning", "debugging", "training"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to diagnose common training problems like stalled loss or exploding gradients.", prerequisites: ["deep-learning-validation-curves-and-learning-curves", "deep-learning-classification-and-regression-metrics"], related: ["deep-learning-validation-curves-and-learning-curves", "deep-learning-error-analysis"], recommended: ["deep-learning-error-analysis", "deep-learning-debugging-neural-networks"] },
    { id: 130, order: 5, slug: "deep-learning-error-analysis", title: "Error Analysis", shortTitle: "Error Analysis", readingTime: 12, tags: ["deep learning", "error analysis", "debugging"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to analyze a model's errors to guide targeted improvements.", prerequisites: ["deep-learning-diagnosing-training-problems", "deep-learning-validation-curves-and-learning-curves"], related: ["deep-learning-diagnosing-training-problems", "deep-learning-debugging-neural-networks"], recommended: ["deep-learning-debugging-neural-networks", "deep-learning-saving-and-loading-deep-learning-models"] },
    { id: 131, order: 6, slug: "deep-learning-debugging-neural-networks", title: "Debugging Neural Networks", shortTitle: "Debugging Neural Networks", readingTime: 14, tags: ["deep learning", "debugging", "neural networks"], status: STATUS.PUBLISHED, featured: true, description: "Learn a systematic approach for debugging neural networks that fail to train well.", prerequisites: ["deep-learning-error-analysis", "deep-learning-diagnosing-training-problems"], related: ["deep-learning-error-analysis", "deep-learning-saving-and-loading-deep-learning-models"], recommended: ["deep-learning-saving-and-loading-deep-learning-models", "deep-learning-building-a-prediction-api"] }
  ]},
 
  { id: "deep-learning-deployment", title: "Deep Learning Deployment", order: 17, difficulty: "Advanced", lessons: [
    { id: 132, order: 1, slug: "deep-learning-saving-and-loading-deep-learning-models", title: "Saving and Loading Deep Learning Models", shortTitle: "Save & Load DL Models", readingTime: 12, tags: ["deep learning", "deployment", "model saving"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to save and load deep learning models for deployment.", prerequisites: ["deep-learning-debugging-neural-networks", "deep-learning-error-analysis"], related: ["deep-learning-building-a-prediction-api", "deep-learning-deploying-models-with-flask-or-fastapi"], recommended: ["deep-learning-building-a-prediction-api", "deep-learning-deploying-models-with-flask-or-fastapi"] },
    { id: 133, order: 2, slug: "deep-learning-building-a-prediction-api", title: "Building a Prediction API", shortTitle: "Prediction API", readingTime: 16, tags: ["deep learning", "deployment", "api"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to expose a trained deep learning model through a prediction API.", prerequisites: ["deep-learning-saving-and-loading-deep-learning-models", "deep-learning-debugging-neural-networks"], related: ["deep-learning-saving-and-loading-deep-learning-models", "deep-learning-deploying-models-with-flask-or-fastapi"], recommended: ["deep-learning-deploying-models-with-flask-or-fastapi", "deep-learning-model-inference-and-batch-prediction"] },
    { id: 134, order: 3, slug: "deep-learning-deploying-models-with-flask-or-fastapi", title: "Deploying Models with Flask or FastAPI", shortTitle: "Deploy with Flask/FastAPI", readingTime: 18, tags: ["deep learning", "deployment", "flask fastapi"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to deploy a deep learning model using Flask or FastAPI.", prerequisites: ["deep-learning-building-a-prediction-api", "deep-learning-saving-and-loading-deep-learning-models"], related: ["deep-learning-building-a-prediction-api", "deep-learning-model-inference-and-batch-prediction"], recommended: ["deep-learning-model-inference-and-batch-prediction", "deep-learning-introduction-to-model-optimization"] },
    { id: 135, order: 4, slug: "deep-learning-model-inference-and-batch-prediction", title: "Model Inference and Batch Prediction", shortTitle: "Inference & Batch Prediction", readingTime: 14, tags: ["deep learning", "inference", "batch prediction"], status: STATUS.PUBLISHED, featured: true, description: "Learn the difference between real-time inference and batch prediction in production.", prerequisites: ["deep-learning-deploying-models-with-flask-or-fastapi", "deep-learning-building-a-prediction-api"], related: ["deep-learning-deploying-models-with-flask-or-fastapi", "deep-learning-introduction-to-model-optimization"], recommended: ["deep-learning-introduction-to-model-optimization", "deep-learning-deploying-deep-learning-applications"] },
    { id: 136, order: 5, slug: "deep-learning-introduction-to-model-optimization", title: "Introduction to Model Optimization", shortTitle: "Model Optimization Intro", readingTime: 14, tags: ["deep learning", "model optimization", "performance"], status: STATUS.PUBLISHED, featured: true, description: "Learn techniques for optimizing deep learning models for faster inference.", prerequisites: ["deep-learning-model-inference-and-batch-prediction", "deep-learning-deploying-models-with-flask-or-fastapi"], related: ["deep-learning-model-inference-and-batch-prediction", "deep-learning-deploying-deep-learning-applications"], recommended: ["deep-learning-deploying-deep-learning-applications", "deep-learning-cpus-vs-gpus-for-deep-learning"] },
    { id: 137, order: 6, slug: "deep-learning-deploying-deep-learning-applications", title: "Deploying Deep Learning Applications", shortTitle: "Deploying DL Applications", readingTime: 18, tags: ["deep learning", "deployment", "applications"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to deploy a complete deep learning application to production.", prerequisites: ["deep-learning-introduction-to-model-optimization", "deep-learning-model-inference-and-batch-prediction"], related: ["deep-learning-introduction-to-model-optimization", "deep-learning-cpus-vs-gpus-for-deep-learning"], recommended: ["deep-learning-cpus-vs-gpus-for-deep-learning", "deep-learning-gpu-training-with-cuda"] }
  ]},
 
  { id: "deep-learning-on-gpus-production", title: "Deep Learning on GPUs & Production", order: 18, difficulty: "Advanced", lessons: [
    { id: 138, order: 1, slug: "deep-learning-cpus-vs-gpus-for-deep-learning", title: "CPUs vs GPUs for Deep Learning", shortTitle: "CPUs vs GPUs", readingTime: 12, tags: ["deep learning", "gpu", "hardware"], status: STATUS.PUBLISHED, featured: true, description: "Learn why GPUs dramatically speed up deep learning training compared to CPUs.", prerequisites: ["deep-learning-deploying-deep-learning-applications", "deep-learning-introduction-to-model-optimization"], related: ["deep-learning-gpu-training-with-cuda", "deep-learning-memory-management-and-batch-size"], recommended: ["deep-learning-gpu-training-with-cuda", "deep-learning-memory-management-and-batch-size"] },
    { id: 139, order: 2, slug: "deep-learning-gpu-training-with-cuda", title: "GPU Training with CUDA", shortTitle: "GPU Training (CUDA)", readingTime: 14, tags: ["deep learning", "gpu", "cuda"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to train deep learning models on a GPU using CUDA.", prerequisites: ["deep-learning-cpus-vs-gpus-for-deep-learning", "deep-learning-deploying-deep-learning-applications"], related: ["deep-learning-cpus-vs-gpus-for-deep-learning", "deep-learning-memory-management-and-batch-size"], recommended: ["deep-learning-memory-management-and-batch-size", "deep-learning-distributed-and-multi-gpu-training"] },
    { id: 140, order: 3, slug: "deep-learning-memory-management-and-batch-size", title: "Memory Management and Batch Size", shortTitle: "Memory & Batch Size", readingTime: 12, tags: ["deep learning", "gpu", "memory management"], status: STATUS.PUBLISHED, featured: true, description: "Learn how GPU memory constraints affect batch size choices during training.", prerequisites: ["deep-learning-gpu-training-with-cuda", "deep-learning-cpus-vs-gpus-for-deep-learning"], related: ["deep-learning-gpu-training-with-cuda", "deep-learning-distributed-and-multi-gpu-training"], recommended: ["deep-learning-distributed-and-multi-gpu-training", "deep-learning-introduction-to-production-deep-learning"] },
    { id: 141, order: 4, slug: "deep-learning-distributed-and-multi-gpu-training", title: "Distributed and Multi-GPU Training", shortTitle: "Distributed & Multi-GPU Training", readingTime: 16, tags: ["deep learning", "distributed training", "multi-gpu"], status: STATUS.PUBLISHED, featured: true, description: "Learn how to scale training across multiple GPUs and machines.", prerequisites: ["deep-learning-memory-management-and-batch-size", "deep-learning-gpu-training-with-cuda"], related: ["deep-learning-memory-management-and-batch-size", "deep-learning-introduction-to-production-deep-learning"], recommended: ["deep-learning-introduction-to-production-deep-learning", "deep-learning-building-an-end-to-end-deep-learning-project"] },
    { id: 142, order: 5, slug: "deep-learning-introduction-to-production-deep-learning", title: "Introduction to Production Deep Learning", shortTitle: "Production DL Intro", readingTime: 14, tags: ["deep learning", "production", "mlops"], status: STATUS.PUBLISHED, featured: true, description: "Get an introduction to what it takes to run deep learning systems in production.", prerequisites: ["deep-learning-distributed-and-multi-gpu-training", "deep-learning-memory-management-and-batch-size"], related: ["deep-learning-distributed-and-multi-gpu-training", "deep-learning-building-an-end-to-end-deep-learning-project"], recommended: ["deep-learning-building-an-end-to-end-deep-learning-project", "deep-learning-image-classification-with-cnns-project"] }
  ]},
 
  { id: "deep-learning-projects", title: "Deep Learning Projects", order: 19, difficulty: "Advanced", lessons: [
    { id: 143, order: 1, slug: "deep-learning-building-an-end-to-end-deep-learning-project", title: "Building an End-to-End Deep Learning Project", shortTitle: "End-to-End DL Project", readingTime: 24, tags: ["deep learning", "project", "end-to-end"], status: STATUS.PUBLISHED, featured: true, description: "Build a complete end-to-end deep learning project from data to deployment.", prerequisites: ["deep-learning-introduction-to-production-deep-learning", "deep-learning-distributed-and-multi-gpu-training"], related: ["deep-learning-image-classification-with-cnns-project", "deep-learning-face-or-sign-language-recognition"], recommended: ["deep-learning-image-classification-with-cnns-project", "deep-learning-face-or-sign-language-recognition"] },
    { id: 144, order: 2, slug: "deep-learning-image-classification-with-cnns-project", title: "Image Classification with CNNs", shortTitle: "Image Classification Project", readingTime: 24, tags: ["deep learning", "project", "cnn"], status: STATUS.PUBLISHED, featured: true, description: "Build a complete image classification project using convolutional neural networks.", prerequisites: ["deep-learning-building-an-end-to-end-deep-learning-project", "deep-learning-introduction-to-production-deep-learning"], related: ["deep-learning-building-an-end-to-end-deep-learning-project", "deep-learning-face-or-sign-language-recognition"], recommended: ["deep-learning-face-or-sign-language-recognition", "deep-learning-sentiment-analysis-with-lstm-transformer"] },
    { id: 145, order: 3, slug: "deep-learning-face-or-sign-language-recognition", title: "Face or Sign Language Recognition", shortTitle: "Face/Sign Language Recognition Project", readingTime: 24, tags: ["deep learning", "project", "computer vision"], status: STATUS.PUBLISHED, featured: true, description: "Build a face recognition or sign language recognition project using deep learning.", prerequisites: ["deep-learning-image-classification-with-cnns-project", "deep-learning-building-an-end-to-end-deep-learning-project"], related: ["deep-learning-image-classification-with-cnns-project", "deep-learning-sentiment-analysis-with-lstm-transformer"], recommended: ["deep-learning-sentiment-analysis-with-lstm-transformer", "deep-learning-time-series-prediction"] },
    { id: 146, order: 4, slug: "deep-learning-sentiment-analysis-with-lstm-transformer", title: "Sentiment Analysis with LSTM/Transformer", shortTitle: "Sentiment Analysis Project", readingTime: 24, tags: ["deep learning", "project", "nlp"], status: STATUS.PUBLISHED, featured: true, description: "Build a sentiment analysis project using either an LSTM or a Transformer model.", prerequisites: ["deep-learning-face-or-sign-language-recognition", "deep-learning-image-classification-with-cnns-project"], related: ["deep-learning-face-or-sign-language-recognition", "deep-learning-time-series-prediction"], recommended: ["deep-learning-time-series-prediction", "deep-learning-building-a-deep-learning-application"] },
    { id: 147, order: 5, slug: "deep-learning-time-series-prediction", title: "Time-Series Prediction", shortTitle: "Time-Series Prediction Project", readingTime: 24, tags: ["deep learning", "project", "time series"], status: STATUS.PUBLISHED, featured: true, description: "Build a time-series prediction project using deep learning models.", prerequisites: ["deep-learning-sentiment-analysis-with-lstm-transformer", "deep-learning-face-or-sign-language-recognition"], related: ["deep-learning-sentiment-analysis-with-lstm-transformer", "deep-learning-building-a-deep-learning-application"], recommended: ["deep-learning-building-a-deep-learning-application", "deep-learning-building-an-end-to-end-deep-learning-project"] },
    { id: 148, order: 6, slug: "deep-learning-building-a-deep-learning-application", title: "Building a Deep Learning Application", shortTitle: "Building a DL Application", readingTime: 26, tags: ["deep learning", "project", "application"], status: STATUS.PUBLISHED, featured: true, description: "Build a complete deep learning application that brings together everything you've learned.", prerequisites: ["deep-learning-time-series-prediction", "deep-learning-sentiment-analysis-with-lstm-transformer"], related: ["deep-learning-time-series-prediction", "deep-learning-building-an-end-to-end-deep-learning-project"], recommended: ["deep-learning-building-an-end-to-end-deep-learning-project", "deep-learning-introduction-to-generative-models"] }
  ]}
];

export const resources = [
  {
    id: "cheat-sheets-and-quick-references",
    title: "Cheat Sheets & Quick References",
    order: 1,
    items: [
      {
        id: 149,
        order: 1,
        slug: "deep-learning-terminology-cheat-sheet",
        title: "Deep Learning Terminology Cheat Sheet",
        shortTitle: "Terminology Cheat Sheet",
        type: "article",
        readingTime: 8,
        tags: ["deep learning", "cheat sheet", "terminology", "reference", "quick guide"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "A comprehensive cheat sheet covering essential deep learning terms, concepts, and definitions for quick reference."
      },
      {
        id: 150,
        order: 2,
        slug: "deep-learning-neural-network-architecture-cheat-sheet",
        title: "Neural Network Architecture Cheat Sheet",
        shortTitle: "Architecture Cheat Sheet",
        type: "article",
        readingTime: 10,
        tags: ["deep learning", "neural networks", "architecture", "cheat sheet", "reference"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Quick-reference guide to popular neural network architectures including CNNs, RNNs, Transformers, and their use cases."
      },
      {
        id: 151,
        order: 3,
        slug: "deep-learning-activation-functions-reference",
        title: "Activation Functions Reference",
        shortTitle: "Activation Functions",
        type: "article",
        readingTime: 8,
        tags: ["deep learning", "activation functions", "neural networks", "reference", "cheat sheet"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Compare and understand common activation functions like ReLU, Sigmoid, Tanh, and Swish with their properties and use cases."
      },
      {
        id: 152,
        order: 4,
        slug: "deep-learning-optimizers-loss-functions-cheat-sheet",
        title: "Optimizers & Loss Functions Cheat Sheet",
        shortTitle: "Optimizers & Loss Functions",
        type: "article",
        readingTime: 10,
        tags: ["deep learning", "optimizers", "loss functions", "training", "cheat sheet"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "A handy reference for choosing the right optimizer and loss function for your deep learning model and task."
      },
      {
        id: 153,
        order: 5,
        slug: "deep-learning-formula-sheet",
        title: "Deep Learning Formula Sheet",
        shortTitle: "Formula Sheet",
        type: "article",
        readingTime: 12,
        tags: ["deep learning", "mathematics", "formulas", "reference", "cheat sheet"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Essential mathematical formulas used in deep learning including backpropagation, gradient descent, and layer computations."
      },
    ]
  },

  {
    id: "datasets-and-practice-resources",
    title: "Datasets & Practice Resources",
    order: 2,
    items: [
      {
        id: 154,
        order: 1,
        slug: "deep-learning-popular-datasets",
        title: "Popular Deep Learning Datasets",
        shortTitle: "Popular Datasets",
        type: "article",
        readingTime: 10,
        tags: ["deep learning", "datasets", "data", "practice", "resources"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Explore widely-used deep learning datasets like MNIST, CIFAR-10, ImageNet, and COCO for building and benchmarking models."
      },
      {
        id: 155,
        order: 2,
        slug: "deep-learning-image-datasets-computer-vision",
        title: "Image Datasets for Computer Vision",
        shortTitle: "Image Datasets",
        type: "article",
        readingTime: 10,
        tags: ["deep learning", "computer vision", "datasets", "images", "cnn"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Curated list of image datasets for classification, object detection, segmentation, and facial recognition tasks."
      },
      {
        id: 156,
        order: 3,
        slug: "deep-learning-nlp-datasets",
        title: "NLP Datasets",
        shortTitle: "NLP Datasets",
        type: "article",
        readingTime: 10,
        tags: ["deep learning", "nlp", "datasets", "text", "transformers"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Discover text and language datasets for sentiment analysis, translation, summarization, and question-answering projects."
      },
      {
        id: 157,
        order: 4,
        slug: "deep-learning-time-series-datasets",
        title: "Time-Series Datasets",
        shortTitle: "Time-Series Datasets",
        type: "article",
        readingTime: 8,
        tags: ["deep learning", "time series", "datasets", "forecasting", "rnn"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Find time-series datasets for stock prediction, weather forecasting, and anomaly detection experiments."
      },
      {
        id: 158,
        order: 5,
        slug: "deep-learning-generative-ai-datasets-resources",
        title: "Generative AI Datasets & Resources",
        shortTitle: "Generative AI Datasets",
        type: "article",
        readingTime: 10,
        tags: ["deep learning", "generative ai", "datasets", "gan", "diffusion models"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Resources and datasets for training generative models including GANs, VAEs, and diffusion-based architectures."
      },
    ]
  },

  {
    id: "tools-and-framework-references",
    title: "Tools & Framework References",
    order: 3,
    items: [
      {
        id: 159,
        order: 1,
        slug: "deep-learning-tensorflow-keras-reference",
        title: "TensorFlow & Keras Reference",
        shortTitle: "TensorFlow & Keras",
        type: "article",
        readingTime: 12,
        tags: ["deep learning", "tensorflow", "keras", "framework", "reference"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Quick-reference guide for TensorFlow and Keras APIs, model building patterns, and common operations."
      },
      {
        id: 160,
        order: 2,
        slug: "deep-learning-pytorch-reference",
        title: "PyTorch Reference",
        shortTitle: "PyTorch",
        type: "article",
        readingTime: 12,
        tags: ["deep learning", "pytorch", "framework", "reference", "dynamic graphs"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Essential PyTorch reference covering tensors, autograd, nn.Module, and training loop best practices."
      },
      {
        id: 161,
        order: 3,
        slug: "deep-learning-hugging-face-ecosystem",
        title: "Hugging Face Ecosystem",
        shortTitle: "Hugging Face",
        type: "article",
        readingTime: 10,
        tags: ["deep learning", "hugging face", "transformers", "nlp", "pretrained models"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Navigate the Hugging Face ecosystem including Transformers, Datasets, and Model Hub for state-of-the-art pretrained models."
      },
      {
        id: 162,
        order: 4,
        slug: "deep-learning-cuda-gpu-resources",
        title: "CUDA & GPU Resources",
        shortTitle: "CUDA & GPU",
        type: "article",
        readingTime: 10,
        tags: ["deep learning", "cuda", "gpu", "hardware", "acceleration"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Learn how to leverage NVIDIA CUDA and GPUs to accelerate deep learning training and inference workflows."
      },
      {
        id: 163,
        order: 5,
        slug: "deep-learning-development-environment-guide",
        title: "Deep Learning Development Environment Guide",
        shortTitle: "Dev Environment",
        type: "article",
        readingTime: 12,
        tags: ["deep learning", "setup", "environment", "tools", "jupyter", "anaconda"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Step-by-step guide to setting up a productive deep learning environment with Jupyter, Conda, Docker, and cloud platforms."
      },
    ]
  },

  {
    id: "further-learning-and-reference-material",
    title: "Further Learning & Reference Material",
    order: 4,
    items: [
      {
        id: 164,
        order: 1,
        slug: "deep-learning-books-courses",
        title: "Deep Learning Books & Courses",
        shortTitle: "Books & Courses",
        type: "article",
        readingTime: 10,
        tags: ["deep learning", "books", "courses", "learning", "resources"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Curated list of must-read deep learning books and top-rated online courses for structured learning."
      },
      {
        id: 165,
        order: 2,
        slug: "deep-learning-important-papers",
        title: "Important Deep Learning Papers",
        shortTitle: "Important Papers",
        type: "article",
        readingTime: 12,
        tags: ["deep learning", "research", "papers", "transformers", "cnn", "gan"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "A collection of landmark research papers that shaped modern deep learning from AlexNet to Transformer architectures."
      },
      {
        id: 166,
        order: 3,
        slug: "deep-learning-neural-network-architecture-reference",
        title: "Neural Network Architecture Reference",
        shortTitle: "Architecture Reference",
        type: "article",
        readingTime: 14,
        tags: ["deep learning", "neural networks", "architecture", "reference", "advanced"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Detailed reference guide to neural network architectures including ResNet, LSTM, Transformer, U-Net, and more."
      },
      {
        id: 167,
        order: 4,
        slug: "deep-learning-research-resources",
        title: "Deep Learning Research Resources",
        shortTitle: "Research Resources",
        type: "article",
        readingTime: 10,
        tags: ["deep learning", "research", "arxiv", "papers", "community"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Discover platforms and communities like arXiv, Papers With Code, and OpenReview to stay updated with cutting-edge research."
      },
      {
        id: 168,
        order: 5,
        slug: "deep-learning-glossary",
        title: "Deep Learning Glossary",
        shortTitle: "Glossary",
        type: "article",
        readingTime: 12,
        tags: ["deep learning", "glossary", "terminology", "definitions", "reference"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "An extensive glossary of deep learning terms from activation functions to zero-shot learning for easy lookup."
      },
    ]
  },

  {
    id: "practice-projects-and-career",
    title: "Practice, Projects & Career",
    order: 5,
    items: [
      {
        id: 169,
        order: 1,
        slug: "deep-learning-project-ideas",
        title: "Deep Learning Project Ideas",
        shortTitle: "Project Ideas",
        type: "article",
        readingTime: 10,
        tags: ["deep learning", "projects", "practice", "portfolio", "ideas"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Inspiring project ideas across computer vision, NLP, and generative AI to sharpen your deep learning skills."
      },
      {
        id: 170,
        order: 2,
        slug: "deep-learning-practice-platforms",
        title: "Deep Learning Practice Platforms",
        shortTitle: "Practice Platforms",
        type: "article",
        readingTime: 8,
        tags: ["deep learning", "practice", "platforms", "kaggle", "competitions", "coding"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Explore platforms like Kaggle, Google Colab, and AIcrowd to practice deep learning through competitions and notebooks."
      },
      {
        id: 171,
        order: 3,
        slug: "deep-learning-portfolio-project-guide",
        title: "Portfolio Project Guide",
        shortTitle: "Portfolio Guide",
        type: "article",
        readingTime: 12,
        tags: ["deep learning", "portfolio", "projects", "career", "showcase"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Learn how to build and present deep learning projects that impress recruiters and demonstrate real-world expertise."
      },
      {
        id: 172,
        order: 4,
        slug: "deep-learning-interview-preparation",
        title: "Deep Learning Interview Preparation",
        shortTitle: "Interview Prep",
        type: "article",
        readingTime: 14,
        tags: ["deep learning", "interview", "career", "questions", "preparation"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "Prepare for deep learning interviews with commonly asked questions on architectures, training strategies, and model evaluation."
      },
      {
        id: 173,
        order: 5,
        slug: "deep-learning-career-roadmap",
        title: "Deep Learning Career Roadmap",
        shortTitle: "Career Roadmap",
        type: "article",
        readingTime: 12,
        tags: ["deep learning", "career", "roadmap", "ai engineer", "ml engineer"],
        status: STATUS.PUBLISHED,
        featured: true,
        description: "A structured roadmap to building a successful career in deep learning from fundamentals to research and production roles."
      },
    ]
  },
];