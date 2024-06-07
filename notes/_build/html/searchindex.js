Search.setIndex({"docnames": ["MachineLearning/Bagging", "MachineLearning/Bias-variance-tradeoff", "MachineLearning/Classification-tree", "MachineLearning/Clustering", "MachineLearning/Discriminative-analysis", "MachineLearning/Discriminative-models", "MachineLearning/Empirical-risk-minimization", "MachineLearning/Generative-models", "MachineLearning/Hierarchical-clustering", "MachineLearning/Kernel-method", "MachineLearning/Logistic-regression", "MachineLearning/Margin-based-classifiers", "MachineLearning/Naive-bayes", "MachineLearning/Perceptron-algorithm", "MachineLearning/Regression-tree", "MachineLearning/Supervised-learning", "MachineLearning/Support-vector-machine-hard-margin", "MachineLearning/Support-vector-machine-soft-margin", "MachineLearning/Support-vector-machines", "MachineLearning/Tree-based-methods", "MachineLearning/kMean-clustering", "Optimization/Global optimization methods", "Optimization/Golden-section-search", "Optimization/Second-order-methods", "Optimization/Steepest-descent", "intro"], "filenames": ["MachineLearning/Bagging.ipynb", "MachineLearning/Bias-variance-tradeoff.ipynb", "MachineLearning/Classification-tree.ipynb", "MachineLearning/Clustering.ipynb", "MachineLearning/Discriminative-analysis.ipynb", "MachineLearning/Discriminative-models.ipynb", "MachineLearning/Empirical-risk-minimization.ipynb", "MachineLearning/Generative-models.ipynb", "MachineLearning/Hierarchical-clustering.ipynb", "MachineLearning/Kernel-method.ipynb", "MachineLearning/Logistic-regression.ipynb", "MachineLearning/Margin-based-classifiers.ipynb", "MachineLearning/Naive-bayes.ipynb", "MachineLearning/Perceptron-algorithm.ipynb", "MachineLearning/Regression-tree.ipynb", "MachineLearning/Supervised-learning.ipynb", "MachineLearning/Support-vector-machine-hard-margin.ipynb", "MachineLearning/Support-vector-machine-soft-margin.ipynb", "MachineLearning/Support-vector-machines.ipynb", "MachineLearning/Tree-based-methods.ipynb", "MachineLearning/kMean-clustering.ipynb", "Optimization/Global optimization methods.ipynb", "Optimization/Golden-section-search.ipynb", "Optimization/Second-order-methods.ipynb", "Optimization/Steepest-descent.ipynb", "intro.md"], "titles": ["<span class=\"section-number\">8.3. </span>Bagging", "<span class=\"section-number\">4.2. </span>Bias variance tradeoff", "<span class=\"section-number\">8.2. </span>Classification tree", "<span class=\"section-number\">9. </span>Clustering", "<span class=\"section-number\">6.1. </span>Discriminative analysis", "<span class=\"section-number\">5. </span>Discriminative models", "<span class=\"section-number\">4.1. </span>Empirical Risk Minimization", "<span class=\"section-number\">6. </span>Generative models", "<span class=\"section-number\">9.2. </span>Hierarchical clustering", "<span class=\"section-number\">7.6. </span>Kernel method", "<span class=\"section-number\">5.1. </span>Logistic regression", "<span class=\"section-number\">7. </span>Margin-based classifier", "<span class=\"section-number\">6.2. </span>Naive Bayes", "<span class=\"section-number\">7.3. </span>Perceptron algorithm", "<span class=\"section-number\">8.1. </span>Regression tree", "<span class=\"section-number\">4. </span>Supervised learning", "<span class=\"section-number\">7.4. </span>Support vector machine (hard margin)", "<span class=\"section-number\">7.5. </span>Support vector machine (soft margin)", "&lt;no title&gt;", "<span class=\"section-number\">8. </span>Tree based methods", "<span class=\"section-number\">9.1. </span>K-Mean clustering", "Global optimization methods", "<span class=\"section-number\">1. </span>Golden section search", "<span class=\"section-number\">3. </span>Second order methods", "<span class=\"section-number\">2. </span>Steepest descent", "My ML Notes"], "terms": {"note": [0, 6, 7, 9, 10, 11, 13, 14, 16, 17], "recal": [1, 6, 9, 11, 12, 13, 14, 16], "our": [1, 4, 6, 11, 14, 20], "predictor": [1, 6, 15], "i": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24], "determin": [1, 4, 6, 11, 13], "solv": [1, 6, 9, 13, 14, 17, 21], "empir": [1, 15], "minim": [1, 10, 14, 15, 20, 21], "problem": [1, 3, 6, 9, 11, 14, 17, 19, 21, 25], "hat": [1, 2, 6, 7, 14], "f": [1, 2, 4, 6, 10, 12, 13, 14, 15, 16, 21, 22, 23, 24], "underset": [1, 6, 7], "text": [1, 2, 6, 7, 10, 11, 12, 13, 14, 16, 17], "argmin": [1, 6, 7, 20], "frac": [1, 4, 6, 7, 9, 10, 11, 13, 14, 16, 17, 20], "1": [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 19, 20, 22, 24], "n": [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21, 24], "sum_": [1, 2, 4, 5, 6, 7, 9, 10, 14, 16, 17, 20], "ell": [1, 6], "x_i": [1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16], "y_i": [1, 2, 4, 5, 6, 10, 11, 13, 14, 15, 16, 17], "howev": [1, 3, 6, 7, 9, 13, 14, 16, 17, 19, 21, 22, 24], "what": 1, "we": [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 22, 23, 24], "ultim": 1, "aim": [1, 15, 20], "expect": [1, 6], "risk": [1, 15], "r": [1, 4, 6, 11, 13, 14, 21, 24], "mathbb": [1, 4, 5, 6, 7, 10, 11, 12, 14, 21, 24], "e": [1, 6, 12, 22], "x": [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 22, 23, 24], "y": [1, 2, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 20, 22, 24], "It": [1, 14, 16, 19], "": [1, 2, 4, 10, 12, 14, 16], "possibl": [1, 6, 14, 16], "successfulli": 1, "still": [1, 6], "have": [1, 6, 7, 9, 10, 16, 17, 19], "larg": [1, 6, 16, 17], "In": [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 17, 19, 23], "case": [1, 10, 11, 13, 16, 17, 21, 22], "aren": [1, 6], "t": [1, 2, 4, 6, 10, 11, 12, 13, 14, 16, 17], "truli": 1, "learn": [1, 3, 7, 12, 14, 19, 25], "therefor": [1, 6, 10, 11, 13, 14, 16, 17], "crucial": [1, 6], "evalu": 1, "gener": [1, 4, 6, 11, 12, 14, 15, 16], "error": [1, 10, 15, 16, 17], "denot": [1, 4, 6, 10, 12, 14, 16, 17, 20], "For": [1, 6, 10, 11, 17, 22], "regress": [1, 2, 7, 19], "g": [1, 4, 16], "squar": [1, 6, 14, 20], "loss": [1, 2, 6, 11, 14, 17], "function": [1, 2, 6, 10, 11, 15, 16, 17, 21, 22, 24], "exist": [1, 11], "conveni": 1, "wai": [1, 3, 6, 9, 11, 13, 14, 16], "decompos": 1, "thi": [1, 3, 4, 5, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 19, 22, 23, 25], "help": [1, 16], "u": [1, 4, 6, 12, 16], "understand": 1, "how": [1, 10, 13, 14, 16], "behav": 1, "model": [1, 4, 6, 10, 11, 12, 14, 17, 19, 25], "complex": [1, 9], "chang": [1, 16], "rest": [1, 11], "section": [1, 3, 7, 11, 15, 16, 21, 23], "assum": [1, 4, 10, 11, 13, 17], "ar": [1, 3, 4, 6, 7, 10, 11, 12, 14, 15, 16, 19, 24], "work": [1, 2, 10, 14, 19, 24], "other": [1, 6, 11, 14, 15, 16, 19, 20, 24], "word": [1, 14, 15, 16, 20], "previou": [1, 21, 23], "show": [1, 2, 4, 8, 10, 12, 13, 14, 16, 17, 20, 22], "bay": [1, 4, 6, 7], "optim": [1, 9, 11, 14, 17, 25], "given": [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 19, 24], "condit": [1, 6, 10, 14, 16, 17], "make": [1, 10, 13, 16], "anoth": 1, "assumpt": [1, 4, 12], "epsilon": [1, 14], "where": [1, 2, 3, 4, 6, 10, 12, 14, 16, 17, 20, 24], "some": [1, 3, 11, 13, 15, 16, 17, 23], "random": [1, 2, 4, 6, 10, 12, 13, 14, 16, 17, 20], "variabl": [1, 4, 6, 16], "0": [1, 2, 4, 6, 8, 9, 10, 11, 12, 13, 14, 16, 17, 20, 22, 24], "var": 1, "sigma": [1, 4, 10, 12], "2": [1, 2, 4, 8, 9, 10, 12, 13, 14, 16, 17, 20, 22, 24], "let": [1, 6, 10, 11, 12, 13, 14], "The": [1, 2, 4, 5, 6, 9, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 24, 25], "begin": [1, 6, 10, 11, 13, 16, 25], "align": [1, 6, 10, 13, 16], "end": [1, 3, 6, 10, 11, 13, 16], "next": [1, 10, 11, 13, 16], "sinc": [1, 6, 7, 10, 11, 13, 14, 16, 24], "depend": [1, 6, 12, 16], "observ": [1, 6, 14, 15, 22], "quantiti": [1, 13], "ad": [1, 13], "subtract": 1, "its": [1, 10, 11], "abov": [1, 6, 16, 22], "argument": 1, "ignor": 1, "cross": 1, "product": 1, "term": [1, 6, 13], "line": [1, 2], "3": [1, 4, 6, 10, 12, 14, 16, 17, 20, 22], "suggest": [1, 6, 11, 16, 17], "irreduc": 1, "nois": [1, 14], "last": [1, 6], "want": [1, 6, 13, 16], "low": [1, 2], "mean": [1, 3, 4, 6, 11, 12, 13, 14, 16, 17, 19], "averag": [1, 6], "predict": [1, 4, 6, 10, 12, 14, 15, 16, 17, 19], "around": 1, "true": [1, 6, 12, 13, 14, 22], "valu": [1, 2, 6, 11, 14, 16, 22, 24], "train": [1, 10, 14, 15, 16], "differ": [1, 2, 4, 22], "sampl": [1, 4, 6, 14, 16], "should": [1, 13, 16], "get": [1, 12, 16, 22], "similar": [1, 19, 22], "result": [1, 22, 24], "turn": [1, 16, 17], "out": [1, 16, 17], "practic": [1, 6, 7, 9, 17, 19], "hard": [1, 3, 14, 17], "acheiv": [1, 16], "same": [1, 2, 4, 16, 17], "time": [1, 6, 9, 13, 15], "more": [1, 3, 13, 14, 24], "often": [1, 6, 21], "curv": 1, "take": [1, 22], "shape": [1, 2, 4, 10, 12, 13, 14, 16, 17, 20], "figur": [1, 4, 10, 12, 14, 16], "impli": [1, 6, 11, 13], "high": [1, 2, 14, 24], "desir": 1, "balanc": 1, "level": [1, 6, 14, 17, 24], "done": [1, 3, 5, 7], "valid": [1, 10, 16], "dataset": [1, 2, 8, 9, 10, 11, 13, 14, 16, 20], "basic": 2, "onli": [2, 7, 9, 12, 16], "choic": [2, 14, 24], "l": [2, 5, 10, 12, 16, 17], "r_1": [2, 14], "r_2": [2, 14], "y_": [2, 14], "region": [2, 14, 16, 19], "induc": 2, "featur": [2, 4, 6, 7, 8, 9, 10, 12, 14, 15, 19, 20], "cut": [2, 14], "set": [2, 6, 10, 11, 14, 17], "replac": [2, 6], "measur": [2, 6, 10], "inpur": 2, "gini": 2, "index": 2, "import": [2, 4, 6, 8, 10, 12, 13, 14, 16, 17, 20, 22, 24], "numpi": [2, 4, 8, 10, 12, 13, 14, 16, 17, 20, 22, 24], "np": [2, 3, 4, 8, 10, 12, 13, 14, 16, 17, 20, 22, 24], "matplotlib": [2, 4, 8, 10, 12, 13, 14, 16, 17, 20, 22, 24], "pyplot": [2, 4, 8, 10, 12, 13, 14, 16, 17, 20, 22, 24], "plt": [2, 4, 8, 10, 12, 13, 14, 16, 17, 20, 22, 24], "from": [2, 4, 6, 8, 10, 12, 14, 16, 20], "collect": 2, "counter": 2, "sklearn": [2, 8, 12, 20], "make_classif": 2, "class": [2, 3, 4, 7, 8, 11, 12, 14, 16, 17, 19, 20], "node": [2, 14], "def": [2, 4, 8, 10, 12, 13, 14, 16, 17, 20, 22, 24], "__init__": [2, 4, 8, 10, 12, 14, 16, 17, 20], "self": [2, 4, 8, 10, 12, 14, 16, 17, 20], "threshold": [2, 14], "left": [2, 14, 22], "right": [2, 14, 22], "classificationtre": 2, "minsplit": [2, 14], "maxdepth": [2, 14], "10": [2, 4, 10, 12, 14, 16, 22, 24], "root": [2, 14, 22], "none": [2, 8, 12, 14, 16], "fit": [2, 4, 8, 10, 12, 14, 16, 17, 20], "growtre": [2, 14], "depth": [2, 14], "n_sampl": [2, 8, 14, 20], "n_featur": [2, 14], "len": [2, 4, 8, 10, 12, 14, 16, 17, 20, 22], "return": [2, 4, 8, 10, 12, 13, 14, 16, 17, 20, 22, 24], "left_x": [2, 14], "left_i": [2, 14], "right_x": [2, 14], "right_i": [2, 14], "_": [2, 3, 5, 6, 10, 11, 12, 13, 14, 15, 17], "getbestsplit": [2, 14], "lefttre": [2, 14], "righttre": [2, 14], "getvalu": [2, 14], "float": [2, 8, 12, 14], "inf": [2, 8, 14], "rang": [2, 4, 8, 12, 13, 14, 16, 20, 22], "uniqu": [2, 14, 16, 20], "left_idx": [2, 14], "right_idx": [2, 14], "left_loss": [2, 14], "entropi": 2, "right_loss": [2, 14], "data": [2, 3, 4, 5, 9, 13, 14, 15, 16, 17], "total_count": 2, "probabl": [2, 7, 10], "arrai": [2, 4, 8, 10, 12, 14, 16, 20, 22, 24], "count": 2, "sum": [2, 10, 12, 14, 16, 20], "log2": 2, "most_common": 2, "100": [2, 8, 10, 13, 14, 16, 17, 20], "x11": 2, "uniform": [2, 14], "size": [2, 4], "x12": 2, "x1": [2, 13, 14, 16, 17], "hstack": 2, "x21": 2, "4": [2, 4, 10, 12, 16, 22], "x22": 2, "x2": [2, 13, 14, 16, 17], "x31": 2, "x32": 2, "x3": 2, "x41": 2, "x42": 2, "x4": 2, "y1": [2, 13, 16, 17], "y3": 2, "ones": [2, 13, 16, 17], "y2": [2, 13, 16, 17], "y4": 2, "zero": [2, 4, 6, 12, 16, 17, 20, 24], "vstack": [2, 13, 16, 17], "scatter": [2, 4, 8, 10, 12, 13, 14, 16, 17, 20, 22], "color": [2, 4, 10, 12, 13, 14, 16, 17, 22, 24], "blue": [2, 13, 16, 17], "label": [2, 4, 8, 11, 12, 13, 16, 17, 20, 22], "red": [2, 13, 16, 17, 22, 24], "xlabel": [2, 4, 8, 13, 16, 17, 20, 22], "ylabel": [2, 4, 8, 13, 16, 17, 20, 22], "titl": [2, 4, 8, 10, 12, 13, 16, 17, 20, 22], "legend": [2, 4], "plot_tre": [2, 14], "plot_nod": [2, 14], "ax": [2, 14, 24], "dx": [2, 14], "dy": [2, 14], "ha": [2, 14, 16, 22], "center": [2, 8, 14, 20], "va": [2, 14], "bbox": [2, 14], "dict": [2, 14], "facecolor": [2, 14], "white": [2, 14], "edgecolor": [2, 14, 20], "black": [2, 13, 14, 16, 17], "els": [2, 14, 22, 24], "plot": [2, 4, 13, 14, 16, 17, 22, 24], "k": [2, 3, 4, 5, 7, 8, 10, 11, 12, 14, 16], "fig": [2, 14, 24], "subplot": [2, 14, 24], "figsiz": [2, 4, 10, 12, 14], "12": [2, 14, 24], "8": [2, 13, 14, 16, 17], "axi": [2, 4, 10, 12, 14, 16, 20], "off": [2, 14], "5": [2, 4, 10, 12, 14, 16, 17, 22, 24], "25": [2, 14], "plot_threshold": 2, "x_min": [2, 4, 10, 12], "x_max": [2, 4, 10, 12], "y_min": [2, 4, 10, 12], "y_max": [2, 4, 10, 12], "elif": 2, "6": [2, 4, 10, 12, 14, 16], "c": [2, 4, 8, 9, 10, 12, 14, 17, 20], "marker": [2, 8, 14, 20], "o": [2, 8, 14, 20], "cmap": [2, 4, 8, 10, 12, 20], "viridi": [2, 8, 20], "min": [2, 4, 8, 10, 12], "max": [2, 4, 10, 12, 17], "set_xlabel": [2, 14], "set_ylabel": [2, 14], "set_titl": [2, 14], "decis": [2, 4, 10, 12, 14], "boundari": [2, 4, 10, 12], "an": [3, 6, 11, 12, 13, 16, 23, 24], "unsupervis": 3, "task": [3, 10], "point": [3, 4, 5, 6, 8, 12, 13, 14, 16, 17, 20, 24], "mathcal": [3, 4, 5, 6, 10, 11, 13, 14, 15, 16, 17], "d": [3, 5, 6, 10, 12, 13, 15, 16, 17], "goal": [3, 6, 11, 14, 15, 16, 20], "look": 3, "homogen": 3, "subgroup": 3, "prespecifi": 3, "number": [3, 4, 6, 10, 13, 19, 22, 24], "can": [3, 4, 6, 7, 9, 10, 11, 13, 14, 16, 17, 19, 22, 24], "mani": [3, 6, 11, 16], "discuss": [3, 7, 11, 13, 15, 19, 21, 23, 25], "sever": [3, 7], "most": [3, 9, 17, 19], "popular": 3, "algorithm": [3, 6, 9, 10, 11, 14, 16, 20, 24, 25], "geenral": 3, "effici": [3, 6], "heurist": 3, "simplifi": [3, 6], "comput": [3, 4, 7, 11, 13, 14], "start": [3, 13, 24], "simpler": 3, "like": [3, 6, 7, 10, 16, 17], "hierarch": 3, "complic": 3, "dbscan": 3, "place": [4, 12], "strong": 4, "distribut": [4, 5, 6, 7, 10, 11, 12], "likelihood": [4, 5, 7, 10, 12], "p": [4, 5, 7, 10, 11, 12, 16], "multivari": [4, 24], "normal": [4, 7, 11, 12, 14], "mu_k": 4, "sigma_k": 4, "mathbf": 4, "particular": 4, "pi": [4, 12, 22], "exp": [4, 10, 12, 22], "bigg": [4, 10, 16], "To": [4, 5, 6, 9, 10, 11, 16, 17], "estim": [4, 5, 6, 10, 14, 19, 24], "us": [4, 5, 6, 7, 9, 10, 11, 14, 15, 16, 17, 20, 22, 24], "maximum": [4, 5, 14], "give": [4, 6, 16], "n_k": 4, "sum_i": 4, "mu_": 4, "them": 4, "posterior": [4, 5, 7, 10, 11], "rule": 4, "pi_k": 4, "pi_i": 4, "prior": [4, 7, 12], "equat": [4, 11, 16], "scipi": [4, 20], "stat": 4, "multivariate_norm": [4, 10, 12, 13, 16, 17], "listedcolormap": [4, 10, 12], "lineardiscriminantanalysi": 4, "param": 4, "mu": [4, 12, 17], "list": 4, "each": [4, 7, 13, 14, 20, 22], "dimens": [4, 14], "total": 4, "covari": 4, "matrix": [4, 6, 10, 12, 16], "respons": [4, 6, 10, 12, 14, 15], "paramet": [4, 5, 6, 10, 13], "lda": 4, "input": [4, 9, 14], "b": [4, 8, 11, 13, 14, 16, 17], "batch": 4, "vector": [4, 9, 11, 12], "reshap": [4, 10, 12, 14, 16], "test": [4, 12, 14, 15, 16, 19], "output": 4, "logit": 4, "prob": [4, 12], "cov": [4, 10, 12], "pdf": 4, "append": [4, 8, 22, 24], "argmax": [4, 12], "now": [4, 10, 13, 14, 16], "implement": 4, "randomli": [4, 13, 20], "150": [4, 12], "three": [4, 6, 14], "gaussian": 4, "also": [4, 13, 14, 22], "shown": [4, 10], "below": [4, 13, 16, 22], "mean1": [4, 10, 12], "mean2": [4, 10, 12], "mean3": [4, 12], "class1": [4, 10, 12], "50": [4, 10, 12, 14, 24], "class2": [4, 10, 12], "class3": [4, 12], "concaten": [4, 10, 12, 13, 16, 17], "print": [4, 10, 12, 13, 22, 24], "09944563": 4, "06766279": 4, "08775699": 4, "68123256": 4, "20992594": 4, "13847892": 4, "23517818": 4, "after": 4, "see": [4, 22, 24], "pretti": 4, "close": [4, 10], "ground": 4, "truth": 4, "further": 4, "visual": [4, 14], "lienar": 4, "confirm": 4, "inde": 4, "h": [4, 10, 11, 12, 16], "05": [4, 10, 12, 16], "cmap_light": [4, 10, 12], "ffaaaa66": [4, 10, 12], "aaffaa66": [4, 10, 12], "aaaaff66": [4, 10, 12], "cmap_bold": [4, 10, 12], "ff0000": [4, 10, 12], "00ff00": [4, 10, 12], "0000ff": [4, 10, 12], "7": [4, 10, 12, 17, 22, 24], "xx": [4, 10, 12], "yy": [4, 10, 12], "meshgrid": [4, 10, 12, 14, 24], "arang": [4, 10, 12, 13, 16, 17], "z": [4, 6, 10, 11, 12, 17, 24], "c_": [4, 10, 12], "ravel": [4, 10, 12, 14, 16], "pcolormesh": [4, 10, 12], "xlim": [4, 10, 12, 13, 16, 17, 22], "ylim": [4, 10, 12, 13, 16, 17], "quadraticdiscriminantanalysi": 4, "qda": 4, "typic": [5, 6, 24], "parameter": [5, 6], "sai": [5, 12], "f_": [5, 6], "theta_k": 5, "logist": [5, 7], "mention": 5, "later": 5, "one": [5, 6, 7, 10, 11, 16, 19], "exampl": [5, 22, 23, 24], "name": [5, 12, 16], "find": [6, 10, 11, 13, 14, 16, 20], "rightarrow": [6, 15, 21, 24], "accur": 6, "accurai": 6, "introduc": [6, 15, 23], "geq": [6, 10, 13, 14, 16, 17], "poor": 6, "context": 6, "neq": [6, 13], "absolut": [6, 11], "small": [6, 17, 24], "frame": [6, 16], "underbrac": 6, "sim": 6, "tag": [6, 7, 11, 13, 16], "includ": [6, 11, 17], "solut": [6, 10, 16, 17, 24], "call": [6, 14, 16], "certain": 6, "directli": [6, 7], "when": [6, 14, 24], "proof": [6, 13], "instead": [6, 7, 16, 17], "wise": 6, "manner": 6, "object": [6, 17], "written": [6, 11], "independ": [6, 12], "follow": [6, 13, 14, 20, 22, 24], "prove": [6, 13], "claim": [6, 13], "tell": 6, "simpli": 6, "despit": 6, "extremli": 6, "challeng": 6, "main": [6, 15], "reason": 6, "unknown": 6, "even": 6, "known": [6, 14, 24], "involv": [6, 9, 11], "within": [6, 20], "integr": 6, "And": [6, 10], "unfortun": 6, "numer": 6, "avail": [6, 12], "type": [6, 24], "space": [6, 11, 14, 19], "all": [6, 11, 13, 14, 16], "feasibl": [6, 16], "cannot": [6, 9], "exactli": [6, 17], "need": [6, 10, 11, 13, 16, 17, 21, 24], "One": [6, 9, 14], "while": [6, 8, 10, 13, 17, 20, 22, 24], "do": [6, 10, 11, 16], "access": 6, "origin": [6, 11, 16], "becaus": [6, 16], "under": 6, "regular": 6, "law": 6, "xrightarrow": 6, "infti": [6, 13, 16], "motiv": 6, "resolv": [6, 9], "present": [6, 16], "earlier": 6, "A": [6, 8, 14, 16, 24], "straightforward": 6, "method": [6, 11, 14, 17, 24], "address": [6, 9], "rather": 6, "than": [6, 11, 14, 16], "over": [6, 14, 23], "confin": 6, "solvabl": 6, "If": [6, 11, 13, 14, 16, 17, 21], "theta": 6, "equival": [6, 16], "which": [6, 10, 16, 17, 19, 22], "stochast": 6, "gradient": [6, 10, 11, 17, 24], "descent": [6, 10, 11, 17, 23], "parametr": 6, "hand": [6, 24], "choos": [6, 7, 13], "good": 6, "nonparametr": [6, 19], "suppos": [6, 10, 13], "restrict": 6, "ourselv": 6, "tx": [6, 10, 11], "tx_i": [6, 10, 11, 13, 16, 17], "_2": [6, 13, 16, 17, 20], "standard": [6, 16], "first": [6, 10, 11, 14, 15, 16, 23], "order": [6, 10], "nabla_": [6, 10, 16, 17], "ty": 6, "probabilist": [7, 11], "discrimin": [7, 12], "joint": 7, "separ": [7, 9, 11, 13, 16, 17], "onc": 7, "been": 7, "recontruct": 7, "theorem": 7, "dure": [7, 11], "infer": [7, 11], "maxim": [7, 16], "compar": [7, 16, 19], "drop": 7, "factor": 7, "machin": [7, 12, 25], "make_blob": [8, 20], "hierarchicalclust": 8, "n_cluster": 8, "metric": [8, 20], "distanc": [8, 11, 16, 17, 20], "newaxi": [8, 10], "tolist": 8, "updat": [8, 13], "cluster_label": 8, "enumer": [8, 17], "min_dist": 8, "min_i": [8, 13], "min_j": 8, "j": [8, 9, 14, 16, 17], "extend": 8, "copi": 8, "pop": 8, "cluster_std": [8, 20], "random_st": [8, 12, 20], "colorbar": [8, 20, 24], "single_linkag": 8, "mindist": 8, "linalg": [8, 24], "norm": [8, 24], "_x": 8, "_y": 8, "so": [9, 11, 12, 13, 16, 21, 24], "far": [9, 11], "focus": [9, 14], "approxim": 9, "hyperplan": [9, 11, 16], "seper": 9, "linear": [9, 10, 12, 17], "fashion": 9, "issu": 9, "consid": [9, 10, 14, 16, 17, 22], "nonlinear": 9, "map": [9, 12], "mapsto": [9, 16], "phi": [9, 22], "ineffici": 9, "simplest": 9, "quadrat": [9, 12, 16, 17, 24], "phi_q": 9, "length": 9, "significantli": 9, "increas": [9, 13, 14], "classif": [9, 10, 11, 17, 19, 20], "soft": 9, "margin": 9, "svm": [9, 17], "max_": [9, 16, 17], "leq": [9, 13, 16, 17], "alpha": [9, 14, 16, 17], "alpha_i": [9, 16, 17], "alpha_jy_iy_jx_i": [9, 16, 17], "tx_j": [9, 16, 17], "thing": 9, "sake": 10, "simplic": 10, "beta_k": 10, "sigmoid": 10, "As": 10, "compress": 10, "real": 10, "down": 10, "interv": [10, 22], "question": [10, 14], "log": 10, "beta": 10, "prod_": 10, "beta_0": 10, "hspace": [10, 11, 13, 16, 17], "8mm": 10, "must": [10, 11, 13, 16], "substitut": 10, "express": 10, "y_ix_i": [10, 13, 16], "unlik": 10, "doe": 10, "form": [10, 13], "binarylogisticregress": 10, "randn": [10, 13, 16, 17, 20], "maxit": [10, 17, 20], "500": [10, 17], "lr": [10, 17], "1e": [10, 12, 16, 17, 22, 24], "n_iter": [10, 20], "grad_step": 10, "_sigmoid": 10, "dot": [10, 13, 16, 17], "astyp": 10, "int": 10, "10000": 10, "seen": 10, "fact": 10, "longleftrightarrow": 10, "beta_i": 10, "5mm": [10, 11, 13, 16, 17], "ensur": 10, "up": 10, "befor": [10, 11, 17], "ve": 11, "contrast": 11, "non": [11, 22], "leverag": 11, "geometr": 11, "properti": 11, "attempt": [11, 20], "dive": 11, "mathematci": 11, "w": [11, 13, 16, 17], "bia": 11, "ly": 11, "two": [11, 14, 22], "part": 11, "10mm": [11, 16], "shortest": 11, "gamma": [11, 16], "lie": 11, "tz": 11, "either": 11, "side": 11, "describ": [11, 21], "whether": [11, 12, 13], "moreov": [11, 13, 16], "li": 11, "half": 11, "plane": 11, "without": 11, "compactli": 11, "weight": [11, 13], "satisfi": [11, 14, 16], "isn": 11, "obviou": 11, "perceptron": [11, 16], "provid": [11, 13, 16], "finit": [11, 13], "iter": [11, 13, 14, 20, 22, 24], "analysi": 12, "x_1": 12, "x_2": 12, "x_d": 12, "condition": 12, "discret": 12, "continu": [12, 14], "gaussiannaivebay": 12, "x_k": 12, "std": 12, "prod": [12, 16, 17], "coeff": 12, "sqrt": [12, 13, 22], "expon": 12, "panda": 12, "pd": 12, "request": 12, "zipfil": 12, "io": 12, "model_select": 12, "train_test_split": 12, "feature_extract": 12, "countvector": 12, "url": 12, "http": 12, "archiv": 12, "ic": 12, "uci": 12, "edu": 12, "ml": 12, "databas": 12, "00228": 12, "smsspamcollect": 12, "zip": 12, "dataset_zip": 12, "bytesio": 12, "content": 12, "extractal": 12, "df": 12, "read_csv": 12, "sep": 12, "header": 12, "messag": 12, "ham": 12, "spam": 12, "head": 12, "go": [12, 20], "until": [12, 13, 20, 22], "jurong": 12, "crazi": 12, "ok": 12, "lar": 12, "joke": 12, "wif": 12, "oni": 12, "free": 12, "entri": 12, "wkly": 12, "comp": 12, "win": 12, "fa": 12, "cup": 12, "fina": 12, "dun": 12, "earli": 12, "hor": 12, "alreadi": 12, "nah": 12, "don": [12, 17], "think": 12, "he": 12, "goe": [12, 13], "usf": 12, "live": 12, "aro": 12, "x_train": 12, "x_test": 12, "y_train": 12, "y_test": 12, "test_siz": 12, "binari": [12, 14], "fit_transform": 12, "toarrai": 12, "transform": 12, "bernoullinaivebay": 12, "laplace_smooth": 12, "7793": 12, "accuraci": [12, 19], "9533632286995516": 12, "2mm": 13, "suffic": 13, "appli": [13, 22], "augment": 13, "read": 13, "asssoci": 13, "constant": 13, "initi": [13, 16, 20, 22, 24], "correctli": [13, 16, 22], "classifi": [13, 16], "th": [13, 17, 20], "thu": 13, "action": 13, "misclassfi": 13, "add": 13, "xi": [13, 17], "2x_i": 13, "posit": 13, "idea": 13, "behind": 13, "repeat": [13, 14], "summar": 13, "diag": [13, 16, 17], "15": [13, 14, 16], "30": [13, 14, 16, 17], "indic": [13, 16, 17], "shuffl": [13, 16, 17], "perceptronalgorithm": 13, "termin": 13, "fals": 13, "nit": [13, 22, 24], "x_line": [13, 16, 17], "linspac": [13, 14, 16, 17, 22, 24], "correct": 13, "w_t": 13, "max_i": 13, "langl": 13, "rangl": 13, "kei": 13, "ingredi": 13, "toward": 13, "reli": [13, 23], "lemma": 13, "tw": 13, "tr": 13, "proce": 13, "induct": 13, "w_0": 13, "statement": 13, "hold": [13, 16], "w_": 13, "again": [13, 16, 17], "2y_i": 13, "tw_t": 13, "theta_t": 13, "angl": 13, "co": [13, 22], "never": 13, "rh": 13, "bound": [13, 16], "contradict": 13, "step": [13, 20, 24], "With": 13, "inequ": [13, 16], "converg": [13, 20, 22], "base": 14, "similarli": 14, "partit": [14, 19], "bigcup_": 14, "r_i": 14, "ani": [14, 16, 20], "contain": [14, 25], "x_": [14, 24], "remain": [14, 16], "r_k": 14, "corrspond": 14, "min_": [14, 16, 17], "cours": [14, 25], "try": 14, "everi": 14, "combin": 14, "computation": 14, "intract": 14, "greedi": 14, "recurs": 14, "split": 14, "fix": [14, 16], "current": 14, "x_j": 14, "interclass": 14, "varianc": [14, 20], "process": 14, "ipython": 14, "displai": 14, "html": 14, "mpl_toolkit": 14, "mplot3d": 14, "axes3d": 14, "well": [14, 24], "leaf": 14, "bodi": 14, "On": 14, "There": 14, "smaller": 14, "run": 14, "optimum": 14, "through": 14, "regressiontre": 14, "_predict": 14, "implment": 14, "synthet": 14, "3x_1": 14, "2x_2": 14, "generate_2d_regression_data": 14, "num_sampl": 14, "seed": 14, "column_stack": 14, "1000": [14, 20, 22, 24], "01": [14, 16], "add_subplot": 14, "111": 14, "project": 14, "3d": 14, "set_zlabel": 14, "round": 14, "being": 14, "surfac": 14, "match": 14, "x1_rang": 14, "x2_rang": 14, "x1_grid": 14, "x2_grid": 14, "x_grid": 14, "y_pred": 14, "ax1": 14, "121": 14, "view_init": 14, "elev": 14, "azim": 14, "60": 14, "ax2": 14, "122": 14, "plot_surfac": 14, "gain": 14, "better": 14, "perform": [14, 17, 24], "new": 15, "previous": 15, "unseen": 15, "character": 15, "relationship": 15, "between": [15, 16], "erm": 15, "framework": 15, "move": [15, 17], "could": 16, "chosen": [16, 24], "both": [16, 23], "1a": 16, "1b": 16, "multipl": 16, "select": 16, "minimum": [16, 22, 24], "intuit": 16, "would": [16, 17], "prefer": 16, "classfier": 16, "smallest": 16, "larger": 16, "less": 16, "misclassif": 16, "formul": 16, "defin": [16, 17, 20], "mathemat": 16, "gamma_i": 16, "among": 16, "subject": [16, 17], "constraint": [16, 17], "subj": 16, "3mm": 16, "By": 16, "program": [16, 17], "associ": 16, "allow": [16, 17], "theori": 16, "min_x": 16, "g_i": 16, "lagrangian": [16, 17], "alpha_ig_i": 16, "primal": 16, "theta_p": 16, "otherwis": 16, "unconstrain": 16, "dual": [16, 17], "much": 16, "easier": 16, "affin": 16, "minimax": 16, "lower": [16, 19], "fortun": 16, "slater": 16, "karush": 16, "kuhn": 16, "tucker": 16, "stationar": 16, "complementar": 16, "slack": 16, "lambda": [16, 17, 24], "lambda_i": [16, 17], "dualiti": 16, "gap": 16, "kkt": [16, 17], "know": 16, "inner": 16, "plug": 16, "stationari": [16, 17], "alpha_iy_i": 16, "softwar": 16, "cvxopt": 16, "solver": 16, "supportvectormachin": 16, "outer": 16, "q": 16, "qp": 16, "pcost": 16, "dcost": 16, "pre": 16, "dre": 16, "4619e": 16, "00": 16, "2066e": 16, "02": 16, "2e": 16, "1836e": 16, "1237e": 16, "7592e": 16, "3418e": 16, "9e": 16, "3e": 16, "03": 16, "0991e": 16, "2052e": 16, "4e": 16, "04": 16, "1862e": 16, "1883e": 16, "5e": 16, "06": [16, 22], "1879e": 16, "07": [16, 24], "08": 16, "09": 16, "found": 16, "linearli": 17, "degre": 17, "xi_i": 17, "hyperparamet": 17, "control": 17, "amount": 17, "toler": 17, "care": 17, "about": 17, "lot": 17, "mu_i": [17, 20], "deriv": 17, "except": 17, "rewrit": 17, "z_": 17, "hing": 17, "supportvectormachinesoftmargin": 17, "dw": 17, "db": 17, "chapter": 19, "act": 19, "simpl": 19, "These": [19, 24], "organ": 19, "concis": 19, "structur": 19, "mode": 19, "correspond": 19, "interpret": 19, "supervis": 19, "singl": [19, 24], "usual": 19, "approach": 19, "overcom": 19, "inter": 20, "formal": 20, "c_1": 20, "c_2": 20, "c_k": 20, "c_i": 20, "centroid": 20, "assign": 20, "closest": 20, "itself": 20, "newli": 20, "recomput": 20, "back": 20, "spatial": 20, "cdist": 20, "kmean": 20, "n_class": 20, "new_assign": 20, "euclidean": 20, "convex": 21, "easili": 21, "nonconvex": 21, "golden_section_search": 22, "func": [22, 24], "a0": 22, "b0": 22, "tol": [22, 24], "path": [22, 24], "ab": 22, "a1": 22, "b1": 22, "locat": [22, 24], "num_it": [22, 24], "x_lim": [22, 24], "grid": 22, "sin": 22, "x_path": 22, "y_path": 22, "rastrigin_funct": 22, "4071683973293187e": 22, "928413150333654e": 22, "26": 22, "ackley_funct": 22, "20": [22, 24], "4071683973431626e": 22, "0695645378640077": 22, "unimod": 22, "decid": 22, "local": [22, 24], "trap": 22, "7x": 22, "2x": 22, "1x": 22, "5x": 22, "524": 22, "536": 22, "nonunimodel_funct": 22, "5242879760390341": 22, "3362668907771037": 22, "27": 22, "5356195885857444": 22, "3646660716369002": 22, "28": 22, "identifi": 22, "improv": 23, "golden": 24, "search": 24, "x_0": 24, "refin": 24, "scheme": 24, "x_n": 24, "d_": 24, "repres": 24, "direct": 24, "stepsiz": 24, "neg": 24, "nabla": 24, "steepest_desc": 24, "func_grad": 24, "init_point": 24, "step_siz": 24, "max_it": 24, "1e6": 24, "y_lim": 24, "x_c": 24, "y_c": 24, "contour": 24, "rx": 24, "markers": 24, "ro": 24, "quit": 24, "quadratic_grad": 24, "55486428e": 24, "141519486638674e": 24, "17": 24, "struggl": 24, "too": 24, "rosenbrock": 24, "reach": 24, "vallei": 24, "becom": 24, "rosenbrock_grad": 24, "40": 24, "99998897": 24, "99997747": 24, "2382656004709132e": 24, "1339": 24, "book": 25, "bioeng": 25, "c142": 25, "statist": 25, "molecular": 25}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"bag": 0, "bia": 1, "varianc": 1, "tradeoff": 1, "decomposit": 1, "classif": 2, "tree": [2, 14, 19], "cluster": [3, 8, 20], "discrimin": [4, 5], "analysi": 4, "linear": [4, 6], "quadrat": 4, "model": [5, 7], "empir": 6, "risk": 6, "minim": 6, "improv": 6, "1": 6, "2": 6, "constrain": 6, "optim": [6, 16, 21], "exampl": 6, "regress": [6, 10, 14], "gener": 7, "hierarch": 8, "kernel": 9, "method": [9, 19, 21, 23], "logist": 10, "binari": 10, "multipl": 10, "class": 10, "margin": [11, 16, 17], "base": [11, 19], "classifi": 11, "A": 11, "review": [11, 16], "euclidean": 11, "geometri": 11, "seper": 11, "data": 11, "point": 11, "naiv": 12, "bay": 12, "gaussian": 12, "bernoulli": 12, "perceptron": 13, "algorithm": 13, "implement": 14, "supervis": 15, "learn": 15, "support": [16, 17], "vector": [16, 17], "machin": [16, 17], "hard": 16, "geometr": 16, "nonlinear": 16, "solv": 16, "svm": 16, "problem": 16, "soft": 17, "k": 20, "mean": 20, "global": 21, "golden": 22, "section": 22, "search": 22, "second": 23, "order": 23, "conjug": 23, "gradient": 23, "steepest": 24, "descent": 24, "my": 25, "ml": 25, "note": 25}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"Bagging": [[0, "bagging"]], "Bias variance tradeoff": [[1, "bias-variance-tradeoff"]], "Bias variance decomposition": [[1, "bias-variance-decomposition"]], "Classification tree": [[2, "classification-tree"]], "Clustering": [[3, "clustering"]], "Discriminative analysis": [[4, "discriminative-analysis"]], "Linear discriminant analysis": [[4, "linear-discriminant-analysis"]], "Quadratic discriminant analysis": [[4, "quadratic-discriminant-analysis"]], "Discriminative models": [[5, "discriminative-models"]], "Empirical Risk Minimization": [[6, "empirical-risk-minimization"]], "Risk minimization": [[6, "risk-minimization"]], "Improvement 1: Empirical risk minimization": [[6, "improvement-1-empirical-risk-minimization"]], "Improvement 2: Constrained optimization": [[6, "improvement-2-constrained-optimization"]], "Example: Linear regression": [[6, "example-linear-regression"]], "Generative models": [[7, "generative-models"]], "Hierarchical clustering": [[8, "hierarchical-clustering"]], "Kernel method": [[9, "kernel-method"]], "Logistic regression": [[10, "logistic-regression"]], "Binary logistic regression": [[10, "binary-logistic-regression"]], "Multiple class logistic regression": [[10, "multiple-class-logistic-regression"]], "Margin-based classifier": [[11, "margin-based-classifier"]], "A review of Euclidean geometry": [[11, "a-review-of-euclidean-geometry"]], "Seperating data points": [[11, "seperating-data-points"]], "Naive Bayes": [[12, "naive-bayes"]], "Gaussian Naive Bayes": [[12, "gaussian-naive-bayes"]], "Bernoulli Naive Bayes": [[12, "bernoulli-naive-bayes"]], "Perceptron algorithm": [[13, "perceptron-algorithm"]], "Regression tree": [[14, "regression-tree"]], "Implementation": [[14, "implementation"]], "Supervised learning": [[15, "supervised-learning"]], "Support vector machine (hard margin)": [[16, "support-vector-machine-hard-margin"]], "Geometric margin": [[16, "geometric-margin"]], "Review of nonlinear optimization": [[16, "review-of-nonlinear-optimization"]], "Solving the SVM problem": [[16, "solving-the-svm-problem"]], "Support vector machine (soft margin)": [[17, "support-vector-machine-soft-margin"]], "Tree based methods": [[19, "tree-based-methods"]], "K-Mean clustering": [[20, "k-mean-clustering"]], "Global optimization methods": [[21, "global-optimization-methods"]], "Golden section search": [[22, "golden-section-search"]], "Second order methods": [[23, "second-order-methods"]], "Conjugate gradient method": [[23, "conjugate-gradient-method"]], "Steepest descent": [[24, "steepest-descent"]], "My ML Notes": [[25, "my-ml-notes"]]}, "indexentries": {}})