Search.setIndex({"docnames": ["ANN/Artificial-neural-network", "Optimization/First order methods", "Optimization/Golden-section-search", "Optimization/Steepest-descent", "intro"], "filenames": ["ANN/Artificial-neural-network.ipynb", "Optimization/First order methods.ipynb", "Optimization/Golden-section-search.ipynb", "Optimization/Steepest-descent.ipynb", "intro.md"], "titles": ["<span class=\"section-number\">3. </span>Artificial neuron networks", "First order methods", "<span class=\"section-number\">1. </span>Golden section search", "<span class=\"section-number\">2. </span>Steepest descent", "My ML Notes"], "terms": {"an": [0, 1, 3], "neural": 0, "seek": 0, "model": [0, 4], "how": 0, "our": 0, "brain": 0, "process": 0, "inform": 0, "thi": [0, 1, 2, 4], "i": [0, 1, 2, 3], "us": [0, 2, 3], "sinc": [0, 3], "good": 0, "task": 0, "comput": 0, "can": [0, 2, 3], "t": 0, "do": 0, "For": [0, 2], "exampl": [0, 1, 2, 3], "almost": 0, "instantli": 0, "from": 0, "birth": 0, "babi": 0, "recogn": 0, "face": 0, "father": 0, "mother": 0, "howev": [0, 2, 3], "nontrivi": 0, "The": [0, 1, 2, 3, 4], "contain": [0, 4], "around": 0, "10": [0, 2, 3], "billion": 0, "each": [0, 2], "connect": 0, "other": [0, 3], "through": 0, "10000": 0, "synaps": 0, "essenti": 0, "thought": 0, "massiv": 0, "parallel": 0, "perform": [0, 3], "extrem": 0, "effici": 0, "In": [0, 1], "1943": 0, "warren": 0, "": 0, "mcculloch": 0, "walter": 0, "pitt": 0, "neuroscientist": 0, "logiciann": 0, "desgin": 0, "first": 0, "It": 0, "action": 0, "potenti": 0, "biolog": 0, "unit": 0, "take": [0, 2], "input": 0, "x_1": 0, "x_2": 0, "sum": 0, "them": 0, "decid": [0, 2], "whether": 0, "fire": 0, "signal": 0, "y": [0, 2, 3], "ask": 0, "abov": [0, 2], "threshold": 0, "theta": 0, "mathemat": 0, "output": 0, "given": [0, 3], "begin": [0, 4], "case": [0, 2], "1": [0, 2, 3], "text": 0, "geq": 0, "0": [0, 2, 3], "otherwis": 0, "end": 0, "abl": 0, "basic": 0, "To": 0, "see": [0, 2, 3], "note": 0, "both": [0, 1], "OR": 0, "AND": 0, "gate": 0, "def": [0, 2, 3], "mccullochpittsneuron": 0, "x1": 0, "x2": 0, "return": [0, 2, 3], "we": [0, 1, 2, 3], "design": 0, "specifi": 0, "2": [0, 2, 3], "and_gat": 0, "print": [0, 2, 3], "f": [0, 1, 2, 3], "pass": 0, "also": [0, 2], "let": 0, "or_gat": 0, "natur": 0, "question": 0, "everi": 0, "unfortun": 0, "onli": 0, "gener": 0, "linear": 0, "boundari": 0, "fix": 0, "classifi": 0, "point": [0, 3], "base": 0, "decis": 0, "And": 0, "therefor": 0, "unabl": 0, "xor": 0, "which": [0, 2], "linearli": 0, "separ": 0, "motiv": 0, "follow": [0, 2, 3], "A": [0, 3], "instead": 0, "simpli": 0, "ad": 0, "consid": [0, 2], "combin": 0, "w_1x_1": 0, "w_2x_2": 0, "b": 0, "where": [0, 3], "w_1": 0, "w_2": 0, "ar": [0, 3], "trainabl": 0, "paramet": 0, "even": 0, "though": 0, "ha": [0, 2], "more": [0, 3], "flexibl": 0, "compar": 0, "mccoulloch": 0, "still": 0, "w_1x_2": 0, "classif": 0, "weight": 0, "determin": 0, "algorithm": [0, 3, 4], "single_perceptron": 0, "w1": 0, "w2": 0, "By": 0, "stack": 0, "multipl": 0, "nonlinear": 0, "xor_gat": 0, "perceptron1": 0, "5": [0, 2, 3], "perceptron2": 0, "perceptron3": 0, "h1": 0, "h2": 0, "descent": 1, "introduc": 1, "previou": 1, "section": 1, "reli": 1, "x": [1, 2, 3], "discuss": [1, 4], "some": 1, "improv": 1, "over": 1, "observ": 2, "import": [2, 3], "numpi": [2, 3], "np": [2, 3], "matplotlib": [2, 3], "pyplot": [2, 3], "plt": [2, 3], "golden_section_search": 2, "func": [2, 3], "a0": 2, "b0": 2, "tol": [2, 3], "1e": [2, 3], "phi": 2, "sqrt": 2, "nit": [2, 3], "path": [2, 3], "while": [2, 3], "ab": 2, "a1": 2, "b1": 2, "els": [2, 3], "append": [2, 3], "root": 2, "locat": [2, 3], "function": [2, 3], "valu": [2, 3], "number": [2, 3], "iter": [2, 3], "until": 2, "converg": 2, "num_it": [2, 3], "plot": [2, 3], "x_lim": [2, 3], "result": [2, 3], "grid": 2, "true": 2, "linspac": [2, 3], "1000": [2, 3], "label": 2, "sin": 2, "x_path": 2, "arrai": [2, 3], "y_path": 2, "rang": 2, "len": 2, "color": [2, 3], "red": [2, 3], "scatter": 2, "xlim": 2, "xlabel": 2, "ylabel": 2, "titl": 2, "show": 2, "rastrigin_funct": 2, "co": 2, "pi": 2, "4071683973293187e": 2, "06": 2, "3": 2, "928413150333654e": 2, "26": 2, "ackley_funct": 2, "20": [2, 3], "exp": 2, "e": 2, "4071683973431626e": 2, "0695645378640077": 2, "non": 2, "unimod": 2, "initi": [2, 3], "interv": 2, "local": [2, 3], "minimum": [2, 3], "get": 2, "trap": 2, "left": 2, "7x": 2, "2x": 2, "1x": 2, "5x": 2, "right": 2, "two": 2, "524": 2, "536": 2, "below": 2, "appli": 2, "differ": 2, "nonunimodel_funct": 2, "7": [2, 3], "5242879760390341": 2, "3362668907771037": 2, "27": 2, "4": 2, "5356195885857444": 2, "3646660716369002": 2, "28": 2, "correctli": 2, "identifi": 2, "similar": 2, "golden": 3, "search": 3, "method": 3, "typic": 3, "singl": 3, "hand": 3, "work": 3, "well": 3, "multivari": 3, "mathbb": 3, "r": 3, "n": 3, "rightarrow": 3, "high": 3, "level": 3, "start": 3, "x_0": 3, "refin": 3, "solut": 3, "scheme": 3, "x_n": 3, "x_": 3, "lambda": 3, "d_": 3, "repres": 3, "direct": 3, "chosen": 3, "step": 3, "stepsiz": 3, "choic": 3, "neg": 3, "gradient": 3, "nabla": 3, "These": 3, "type": 3, "known": 3, "steepest_desc": 3, "func_grad": 3, "init_point": 3, "step_siz": 3, "max_it": 3, "1e6": 3, "linalg": 3, "norm": 3, "y_lim": 3, "x_c": 3, "y_c": 3, "meshgrid": 3, "z": 3, "fig": 3, "ax": 3, "subplot": 3, "contour": 3, "50": 3, "colorbar": 3, "rx": 3, "markers": 3, "ro": 3, "estim": 3, "need": 3, "quit": 3, "quadrat": 3, "quadratic_grad": 3, "55486428e": 3, "07": 3, "141519486638674e": 3, "12": 3, "17": 3, "struggl": 3, "when": 3, "too": 3, "small": 3, "rosenbrock": 3, "reach": 3, "vallei": 3, "becom": 3, "zero": 3, "so": 3, "rosenbrock_grad": 3, "40": 3, "99998897": 3, "99997747": 3, "2382656004709132e": 3, "1339": 3, "book": 4, "bioeng": 4, "c142": 4, "machin": 4, "learn": 4, "statist": 4, "optim": 4, "molecular": 4, "problem": 4, "cours": 4}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"artifici": 0, "neuron": 0, "network": 0, "simpl": 0, "perceptron": 0, "multilay": 0, "first": 1, "order": 1, "method": 1, "conjug": 1, "gradient": 1, "golden": 2, "section": 2, "search": 2, "steepest": 3, "descent": 3, "my": 4, "ml": 4, "note": 4}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"Artificial neuron networks": [[0, "artificial-neuron-networks"]], "Simple perceptron": [[0, "simple-perceptron"]], "Multilayer perceptron": [[0, "multilayer-perceptron"]], "First order methods": [[1, "first-order-methods"]], "Conjugate gradient method": [[1, "conjugate-gradient-method"]], "Golden section search": [[2, "golden-section-search"]], "Steepest descent": [[3, "steepest-descent"]], "My ML Notes": [[4, "my-ml-notes"]]}, "indexentries": {}})