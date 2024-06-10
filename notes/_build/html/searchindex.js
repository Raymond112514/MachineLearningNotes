Search.setIndex({"docnames": ["ANN/Artificial-neural-network", "ANN/Neural-networks", "MachineLearning/Discriminative-analysis", "MachineLearning/Discriminative-models", "MachineLearning/Empirical-risk-minimization", "MachineLearning/Generative-models", "Optimization/Global optimization methods", "Optimization/Golden-section-search", "Optimization/Second-order-methods", "Optimization/Steepest-descent", "intro"], "filenames": ["ANN/Artificial-neural-network.ipynb", "ANN/Neural-networks.ipynb", "MachineLearning/Discriminative-analysis.ipynb", "MachineLearning/Discriminative-models.ipynb", "MachineLearning/Empirical-risk-minimization.ipynb", "MachineLearning/Generative-models.ipynb", "Optimization/Global optimization methods.ipynb", "Optimization/Golden-section-search.ipynb", "Optimization/Second-order-methods.ipynb", "Optimization/Steepest-descent.ipynb", "intro.md"], "titles": ["<span class=\"section-number\">7. </span>Artificial neuron networks", "<span class=\"section-number\">8. </span>Linear regression", "<span class=\"section-number\">6.1. </span>Discriminative analysis", "<span class=\"section-number\">5. </span>Discriminative models", "<span class=\"section-number\">4. </span>Empirical Risk Minimization (ERM)", "<span class=\"section-number\">6. </span>Generative models", "Global optimization methods", "<span class=\"section-number\">1. </span>Golden section search", "<span class=\"section-number\">3. </span>Second order methods", "<span class=\"section-number\">2. </span>Steepest descent", "My ML Notes"], "terms": {"an": [0, 4, 8, 9], "neural": 0, "seek": 0, "model": [0, 2, 4, 10], "how": [0, 4], "our": [0, 2], "brain": 0, "process": 0, "inform": 0, "thi": [0, 1, 2, 4, 7, 8, 10], "i": [0, 1, 2, 4, 6, 7, 8, 9], "us": [0, 1, 2, 4, 5, 7, 9], "sinc": [0, 4, 9], "good": [0, 4], "task": [0, 1], "comput": [0, 2], "can": [0, 2, 4, 5, 7, 9], "t": [0, 1, 2], "do": [0, 4], "For": [0, 1, 7], "exampl": [0, 1, 7, 8, 9], "almost": 0, "instantli": 0, "from": [0, 2], "birth": 0, "babi": 0, "recogn": 0, "face": 0, "father": 0, "mother": 0, "howev": [0, 5, 6, 7, 9], "nontrivi": 0, "The": [0, 2, 4, 7, 8, 9, 10], "contain": [0, 10], "around": 0, "10": [0, 1, 2, 7, 9], "billion": 0, "each": [0, 2, 7], "connect": 0, "other": [0, 2, 4, 9], "through": 0, "10000": 0, "synaps": 0, "essenti": 0, "thought": 0, "massiv": 0, "parallel": 0, "perform": [0, 1, 9], "extrem": [0, 4], "effici": 0, "In": [0, 1, 2, 3, 4, 5, 8], "1943": 0, "warren": 0, "": [0, 1, 2], "mcculloch": 0, "walter": 0, "pitt": 0, "neuroscientist": 0, "logiciann": 0, "desgin": 0, "first": [0, 8], "It": [0, 1], "action": 0, "potenti": 0, "biolog": 0, "unit": 0, "take": [0, 7], "input": [0, 1, 2, 4], "x_1": 0, "x_2": 0, "sum": [0, 2], "them": [0, 2], "decid": [0, 7], "whether": 0, "fire": 0, "signal": 0, "y": [0, 1, 2, 3, 4, 5, 7, 9], "ask": 0, "abov": [0, 7], "threshold": 0, "theta": [0, 4], "mathemat": 0, "output": [0, 1, 2], "given": [0, 2, 4, 9], "begin": [0, 10], "case": [0, 4, 6, 7], "1": [0, 1, 2, 4, 7, 9], "text": [0, 1, 4], "geq": [0, 4], "0": [0, 1, 2, 4, 7, 9], "otherwis": 0, "end": 0, "abl": [0, 1], "basic": 0, "To": [0, 2, 4], "see": [0, 2, 7, 9], "note": [0, 4], "both": [0, 2, 8], "OR": 0, "AND": 0, "gate": 0, "def": [0, 1, 2, 7, 9], "mccullochpittsneuron": 0, "x1": 0, "x2": 0, "return": [0, 2, 7, 9], "we": [0, 1, 2, 3, 4, 5, 7, 8, 9], "design": 0, "specifi": 0, "2": [0, 1, 2, 4, 7, 9], "and_gat": 0, "print": [0, 1, 2, 7, 9], "f": [0, 1, 2, 4, 6, 7, 8, 9], "pass": 0, "also": [0, 1, 2, 7], "let": [0, 4], "or_gat": 0, "natur": [0, 4], "question": 0, "everi": 0, "unfortun": 0, "onli": 0, "gener": [0, 1, 2], "linear": [0, 5], "boundari": [0, 2], "fix": 0, "classifi": 0, "point": [0, 2, 9], "base": 0, "decis": [0, 2], "And": 0, "therefor": 0, "unabl": 0, "xor": 0, "which": [0, 4, 7], "linearli": 0, "separ": 0, "motiv": [0, 4], "follow": [0, 7, 9], "A": [0, 9], "instead": [0, 2], "simpli": 0, "ad": 0, "consid": [0, 4, 7], "combin": 0, "w_1x_1": 0, "w_2x_2": 0, "b": [0, 2], "where": [0, 2, 4, 9], "w_1": 0, "w_2": 0, "ar": [0, 2, 4, 9], "trainabl": 0, "paramet": [0, 2, 4], "even": [0, 4], "though": [0, 4], "ha": [0, 7], "more": [0, 9], "flexibl": 0, "compar": 0, "mccoulloch": 0, "still": [0, 4], "w_1x_2": 0, "classif": [0, 1], "weight": 0, "determin": [0, 2], "algorithm": [0, 4, 9, 10], "single_perceptron": 0, "w1": 0, "w2": 0, "By": [0, 1, 5], "stack": 0, "multipl": [0, 1], "nonlinear": 0, "xor_gat": 0, "perceptron1": 0, "5": [0, 2, 7, 9], "perceptron2": 0, "perceptron3": 0, "h1": 0, "h2": 0, "import": [1, 2, 7, 9], "numpi": [1, 2, 7, 9], "np": [1, 2, 7, 9], "matplotlib": [1, 2, 7, 9], "pyplot": [1, 2, 7, 9], "plt": [1, 2, 7, 9], "previou": [1, 6, 8], "section": [1, 6, 8], "introduc": [1, 8], "simpl": 1, "perceptron": 1, "sgn": 1, "x": [1, 2, 3, 4, 5, 7, 8, 9], "activ": 1, "function": [1, 6, 7, 9], "help": 1, "u": [1, 2, 4], "binari": 1, "turn": [1, 5], "out": [1, 2], "capabl": 1, "wide": 1, "rang": [1, 2, 7], "alter": 1, "explor": 1, "some": [1, 8], "replac": [1, 4], "class": [1, 2], "simpleperceptron": 1, "__init__": [1, 2], "self": [1, 2], "n": [1, 2, 4, 6, 9], "lambda": [1, 9], "activation_grad": 1, "lr": 1, "w": 1, "random": [1, 2, 4], "normal": [1, 2], "size": [1, 2, 4], "z": [1, 2, 9], "none": [1, 2], "loss": [1, 4], "forward": 1, "hstack": 1, "ones": 1, "shape": [1, 2], "dot": 1, "backward": 1, "dw": 1, "train": 1, "epoch": 1, "mean": [1, 2, 4], "append": [1, 2, 7, 9], "plot_loss": 1, "plot": [1, 2, 7, 9], "show": [1, 2, 7], "n_sampl": 1, "100": 1, "n_featur": 1, "uniform": 1, "arrai": [1, 2, 7, 9], "4": [1, 2, 4, 7], "3": [1, 2, 4, 7], "data": [1, 2], "scatter": [1, 2, 7], "squeez": 1, "xlabel": [1, 2, 7], "ylabel": [1, 2, 7], "titl": [1, 2, 7], "sampl": [1, 2, 4], "linspac": [1, 7, 9], "c": [1, 2], "r": [1, 2, 4, 6, 9], "initi": [1, 2, 7, 9], "predictor": [1, 4], "nameerror": 1, "traceback": [1, 2], "most": [1, 2], "recent": [1, 2], "call": [1, 2, 4], "last": [1, 2], "cell": [1, 2], "7": [1, 2, 7, 9], "line": [1, 2], "31": 1, "30": 1, "32": 1, "name": 1, "defin": 1, "final": [1, 4], "sigmoid": 1, "exp": [1, 2, 7], "sigmoid_grad": 1, "two": [2, 7], "major": 2, "distribut": [2, 3, 4, 5], "mathbb": [2, 3, 4, 5, 6, 9], "p": [2, 3, 5], "k": [2, 3, 5], "differ": [2, 7], "covari": 2, "matrix": 2, "naiv": 2, "bay": [2, 5], "hand": [2, 4, 9], "made": 2, "simplifi": 2, "assumpt": 2, "featur": 2, "condition": 2, "independ": 2, "multivari": [2, 9], "mu_k": 2, "mathbf": 2, "sigma": 2, "particular": 2, "frac": [2, 4, 5], "pi": [2, 7], "bigg": 2, "estim": [2, 4, 9], "maximum": 2, "likelihood": 2, "give": [2, 4], "n_k": 2, "sum_": [2, 4, 5], "y_i": [2, 4], "x_i": [2, 4], "sum_i": 2, "mu_": 2, "posterior": [2, 3, 5], "rule": 2, "pi_k": 2, "pi_i": 2, "prior": 2, "equat": 2, "scipi": 2, "stat": 2, "multivariate_norm": 2, "color": [2, 7, 9], "listedcolormap": 2, "lineardiscriminantanalysi": 2, "param": 2, "number": [2, 7, 9], "variabl": [2, 4], "mu": 2, "list": 2, "dimens": 2, "total": 2, "zero": [2, 9], "fit": 2, "respons": [2, 4], "lda": 2, "denot": [2, 4], "batch": 2, "vector": 2, "len": [2, 7], "reshap": 2, "test": 2, "predict": [2, 4], "logit": 2, "prob": 2, "cov": 2, "pdf": 2, "argmax": 2, "now": 2, "implement": 2, "randomli": 2, "150": 2, "three": [2, 4], "gaussian": 2, "same": 2, "shown": 2, "below": [2, 7], "mean1": 2, "mean2": 2, "mean3": 2, "class1": 2, "50": [2, 9], "class2": 2, "class3": 2, "concaten": 2, "axi": 2, "figur": 2, "figsiz": 2, "6": 2, "label": [2, 7], "g": 2, "legend": 2, "12239151": 2, "79860528": 2, "16925583": 2, "05755449": 2, "95983922": 2, "11760642": 2, "68033213": 2, "after": 2, "pretti": 2, "close": 2, "ground": 2, "truth": 2, "further": 2, "visual": 2, "lienar": 2, "confirm": 2, "inde": 2, "h": 2, "05": 2, "cmap_light": 2, "ffaaaa66": 2, "aaffaa66": 2, "aaaaff66": 2, "cmap_bold": 2, "ff0000": 2, "00ff00": 2, "0000ff": 2, "x_min": 2, "x_max": 2, "y_min": 2, "y_max": 2, "xx": 2, "yy": 2, "meshgrid": [2, 9], "arang": 2, "c_": 2, "ravel": 2, "keyboardinterrupt": 2, "8": 2, "9": 2, "11": 2, "53": 2, "51": 2, "52": 2, "54": 2, "55": 2, "file": 2, "anaconda3": 2, "lib": 2, "python3": 2, "site": 2, "packag": 2, "_multivari": 2, "py": 2, "851": 2, "multivariate_normal_frozen": 2, "850": 2, "logpdf": 2, "844": 2, "842": 2, "843": 2, "_dist": 2, "_process_quantil": 2, "dim": 2, "_logpdf": 2, "cov_object": 2, "845": 2, "ani": 2, "rank": 2, "846": 2, "out_of_bound": 2, "_support_mask": 2, "530": 2, "multivariate_normal_gen": 2, "528": 2, "log_det_cov": 2, "newaxi": 2, "529": 2, "maha": 2, "squar": 2, "whiten": 2, "dev": 2, "531": 2, "_log_2pi": 2, "__array_function__": 2, "intern": 2, "180": 2, "arg": 2, "kwarg": 2, "core": 2, "fromnumer": 2, "2285": 2, "dtype": 2, "keepdim": 2, "2162": 2, "array_function_dispatch": 2, "_sum_dispatch": 2, "2163": 2, "_novalu": 2, "2164": 2, "2165": 2, "2166": 2, "element": 2, "over": [2, 8], "2167": 2, "2283": 2, "15": 2, "2284": 2, "isinst": 2, "_gentyp": 2, "2286": 2, "2018": 2, "02": 2, "25": 2, "2287": 2, "warn": 2, "2288": 2, "deprec": 2, "futur": 2, "result": [2, 7, 9], "2289": 2, "fromit": 2, "python": 2, "builtin": 2, "2290": 2, "deprecationwarn": 2, "stacklevel": 2, "2292": 2, "re": 2, "_sum_": 2, "pcolormesh": 2, "cmap": 2, "xlim": [2, 7], "min": 2, "max": 2, "ylim": 2, "quadraticdiscriminantanalysi": 2, "qda": 2, "mathcal": 4, "machin": [4, 10], "learn": [4, 10], "sim": 4, "main": 4, "goal": 4, "word": 4, "want": 4, "find": 4, "rightarrow": [4, 6, 9], "nice": 4, "measur": 4, "ell": 4, "time": 4, "_": 4, "If": [4, 6], "small": [4, 9], "averag": 4, "frame": 4, "optim": [4, 10], "problem": [4, 6, 10], "underset": 4, "argmin": 4, "underbrac": 4, "e": [4, 7], "tag": 4, "hard": 4, "solv": [4, 6], "reason": 4, "typic": [4, 9], "unknown": 4, "practic": 4, "known": [4, 9], "requir": 4, "insid": 4, "doubl": 4, "integr": 4, "space": 4, "all": 4, "fucntion": 4, "larg": 4, "often": [4, 6], "cannot": 4, "exactli": 4, "need": [4, 6, 9], "simiplfi": 4, "optimzi": 4, "have": 4, "access": 4, "d": 4, "under": 4, "certain": 4, "regular": 4, "condit": 4, "xrightarrow": 4, "infti": 4, "object": 4, "hat": 4, "true": [4, 7], "new": 4, "too": [4, 9], "resolut": 4, "parameter": 4, "nonparameter": 4, "On": 4, "parametr": 4, "equival": 4, "optimi": 4, "f_": 4, "numer": 4, "gradient": [4, 9], "descent": [4, 8], "stochast": 4, "discrimin": 5, "like": 5, "logist": 5, "regress": 5, "directli": 5, "joint": 5, "onc": 5, "ve": 5, "recontruct": 5, "theorem": 5, "convex": 6, "describ": 6, "easili": 6, "minim": 6, "nonconvex": 6, "so": [6, 9], "discuss": [6, 8, 10], "observ": 7, "golden_section_search": 7, "func": [7, 9], "a0": 7, "b0": 7, "tol": [7, 9], "1e": [7, 9], "phi": 7, "sqrt": 7, "nit": [7, 9], "path": [7, 9], "while": [7, 9], "ab": 7, "a1": 7, "b1": 7, "els": [7, 9], "root": 7, "locat": [7, 9], "valu": [7, 9], "iter": [7, 9], "until": 7, "converg": 7, "num_it": [7, 9], "x_lim": [7, 9], "grid": 7, "1000": [7, 9], "sin": 7, "x_path": 7, "y_path": 7, "red": [7, 9], "rastrigin_funct": 7, "co": 7, "4071683973293187e": 7, "06": 7, "928413150333654e": 7, "26": 7, "ackley_funct": 7, "20": [7, 9], "4071683973431626e": 7, "0695645378640077": 7, "non": 7, "unimod": 7, "interv": 7, "local": [7, 9], "minimum": [7, 9], "get": 7, "trap": 7, "left": 7, "7x": 7, "2x": 7, "1x": 7, "5x": 7, "right": 7, "524": 7, "536": 7, "appli": 7, "nonunimodel_funct": 7, "5242879760390341": 7, "3362668907771037": 7, "27": 7, "5356195885857444": 7, "3646660716369002": 7, "28": 7, "correctli": 7, "identifi": 7, "similar": 7, "reli": 8, "improv": 8, "golden": 9, "search": 9, "method": 9, "singl": 9, "work": 9, "well": 9, "high": 9, "level": 9, "start": 9, "x_0": 9, "refin": 9, "solut": 9, "scheme": 9, "x_n": 9, "x_": 9, "d_": 9, "repres": 9, "direct": 9, "chosen": 9, "step": 9, "stepsiz": 9, "choic": 9, "neg": 9, "nabla": 9, "These": 9, "type": 9, "steepest_desc": 9, "func_grad": 9, "init_point": 9, "step_siz": 9, "max_it": 9, "1e6": 9, "linalg": 9, "norm": 9, "y_lim": 9, "x_c": 9, "y_c": 9, "fig": 9, "ax": 9, "subplot": 9, "contour": 9, "colorbar": 9, "rx": 9, "markers": 9, "ro": 9, "quit": 9, "quadrat": 9, "quadratic_grad": 9, "55486428e": 9, "07": 9, "141519486638674e": 9, "12": 9, "17": 9, "struggl": 9, "when": 9, "rosenbrock": 9, "reach": 9, "vallei": 9, "becom": 9, "rosenbrock_grad": 9, "40": 9, "99998897": 9, "99997747": 9, "2382656004709132e": 9, "1339": 9, "book": 10, "bioeng": 10, "c142": 10, "statist": 10, "molecular": 10, "cours": 10}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"artifici": 0, "neuron": 0, "network": 0, "simpl": 0, "perceptron": 0, "multilay": 0, "linear": [1, 2], "regress": 1, "logist": 1, "discrimin": [2, 3], "analysi": 2, "quadrat": 2, "model": [3, 5], "empir": 4, "risk": 4, "minim": 4, "erm": 4, "constrain": 4, "feasibl": 4, "function": 4, "set": 4, "gener": 5, "global": 6, "optim": 6, "method": [6, 8], "golden": 7, "section": 7, "search": 7, "second": 8, "order": 8, "conjug": 8, "gradient": 8, "steepest": 9, "descent": 9, "my": 10, "ml": 10, "note": 10}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"Artificial neuron networks": [[0, "artificial-neuron-networks"]], "Simple perceptron": [[0, "simple-perceptron"]], "Multilayer perceptron": [[0, "multilayer-perceptron"]], "Linear regression": [[1, "linear-regression"]], "Logistic regression": [[1, "logistic-regression"]], "Discriminative analysis": [[2, "discriminative-analysis"]], "Linear discriminant analysis": [[2, "linear-discriminant-analysis"]], "Quadratic discriminant analysis": [[2, "quadratic-discriminant-analysis"]], "Discriminative models": [[3, "discriminative-models"]], "Empirical Risk Minimization (ERM)": [[4, "empirical-risk-minimization-erm"]], "Risk minimization": [[4, "risk-minimization"]], "Empirical risk minimization": [[4, "empirical-risk-minimization"]], "Constrain feasible function set": [[4, "constrain-feasible-function-set"]], "Generative models": [[5, "generative-models"]], "Global optimization methods": [[6, "global-optimization-methods"]], "Golden section search": [[7, "golden-section-search"]], "Second order methods": [[8, "second-order-methods"]], "Conjugate gradient method": [[8, "conjugate-gradient-method"]], "Steepest descent": [[9, "steepest-descent"]], "My ML Notes": [[10, "my-ml-notes"]]}, "indexentries": {}})