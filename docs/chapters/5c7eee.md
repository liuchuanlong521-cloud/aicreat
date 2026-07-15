---
title: 3.1 AI 产品技术理解要求
source: https://ai.fullcoding.cn/pages/5c7eee/
---

::: tip 核心考点
前言

"AI PM 到底需不需要懂技术？"这是每一个想转型 AI PM 的人都会问的问题。答案不是简单的"需要"或"不需要"，而是：你需要懂到什么程度、懂哪些技术、以及懂技术的目的是什么。

本文的目标，是给你一张**AI PM 技术知识的完整地图**。从机器学习基础到大语言模型，从技术架构到评估体系，从认证路径到与算法工程师的沟通语言——让你建立系统性的技术认知框架，既不会因为不懂技术而被算法团队牵着鼻子走，也不会因为钻得太深而偏离产品本质。
:::

* * *

##  一、核心问题的系统回答：AI PM 到底需不需要懂技术？

###  （一）一个常见的认知误区

很多传统 PM 转型 AI PM 时，会陷入两个极端：

<table><thead><tr><th style="text-align:left;">极端</th><th style="text-align:left;">表现</th><th style="text-align:left;">后果</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>技术恐惧型</strong></td><td style="text-align:left;">"我是 PM，技术应该让工程师操心，我不需要懂"</td><td style="text-align:left;">需求评审时被工程师质疑"这个需求技术上不可行"而无法判断；算法说"做不了"就接受，错失很多创新机会</td></tr><tr><td style="text-align:left;"><strong>技术沉迷型</strong></td><td style="text-align:left;">"我要把 Transformer 论文读透、把 PyTorch 学会"</td><td style="text-align:left;">花了大量时间学技术，但产品能力没有同步提升；能和工程师聊论文，但做不出好产品</td></tr></tbody></table>

正确的认知是：**AI PM 不需要像算法工程师一样写代码、推导公式，但需要对技术的原理、能力边界、成本结构有系统性的理解。**

###  （二）懂技术的三个目的

AI PM 懂技术，不是为了替代工程师，而是为了三个核心目的：

####  1. 判断可行性

当你提出一个需求时，你需要判断：

-   当前技术是否能实现？（可行性）
-   如果能实现，成本是多少？（经济性）
-   如果不能实现，差距有多大？（技术差距）

**案例**：你提出"让 AI 自动生成一份完整的商业计划书"。如果你懂技术，你会知道：

-   当前大模型可以生成结构化的商业计划书框架（可行）
-   但涉及具体行业数据和财务预测时，模型会产生幻觉（不可行，需要数据接入）
-   生成一份高质量的商业计划书需要多次迭代和人工校验（成本较高）

####  2. 设定合理预期

不懂技术的 PM 容易对 AI 能力有不切实际的预期：

-   "准确率能不能做到 99.99%？"——对于复杂的 NLP 任务，95% 已经是很好的水平
-   "能不能实时处理 4K 视频？"——需要考虑算力成本和延迟
-   "能不能理解我所有的意图？"——当前 AI 是概率模型，不可能做到 100% 理解

懂技术的 PM 会基于技术现状设定合理的目标，既不过度承诺，也不低估潜力。

####  3. 与算法团队高效协作

懂技术的 PM 能和算法团队用同一套语言沟通：

-   能听懂算法工程师说的"召回率太低""过拟合了""需要更多标注数据"
-   能提出有技术深度的需求："我希望在这个场景下引入负采样策略"
-   能理解算法团队的排期逻辑：数据准备→模型训练→效果评估→上线部署

###  （三）技术理解 vs 技术能力的边界

<table><thead><tr><th style="text-align:left;">能力维度</th><th style="text-align:left;">算法工程师</th><th style="text-align:left;">AI PM</th><th style="text-align:left;">传统 PM</th></tr></thead><tbody><tr><td style="text-align:left;">写代码/搭模型</td><td style="text-align:left;">必须精通</td><td style="text-align:left;">不需要</td><td style="text-align:left;">不需要</td></tr><tr><td style="text-align:left;">推导数学公式</td><td style="text-align:left;">必须精通</td><td style="text-align:left;">不需要</td><td style="text-align:left;">不需要</td></tr><tr><td style="text-align:left;">理解技术原理</td><td style="text-align:left;">必须精通</td><td style="text-align:left;"><strong>需要理解</strong></td><td style="text-align:left;">不需要</td></tr><tr><td style="text-align:left;">判断技术可行性</td><td style="text-align:left;">必须精通</td><td style="text-align:left;"><strong>需要具备</strong></td><td style="text-align:left;">基本不需要</td></tr><tr><td style="text-align:left;">设计评估体系</td><td style="text-align:left;">需要具备</td><td style="text-align:left;"><strong>需要具备</strong></td><td style="text-align:left;">基本不需要</td></tr><tr><td style="text-align:left;">理解成本结构</td><td style="text-align:left;">需要具备</td><td style="text-align:left;"><strong>需要具备</strong></td><td style="text-align:left;">基本不需要</td></tr><tr><td style="text-align:left;">设定技术目标</td><td style="text-align:left;">需要具备</td><td style="text-align:left;"><strong>需要具备</strong></td><td style="text-align:left;">基本不需要</td></tr><tr><td style="text-align:left;">产品需求定义</td><td style="text-align:left;">不需要</td><td style="text-align:left;">必须精通</td><td style="text-align:left;">必须精通</td></tr><tr><td style="text-align:left;">用户体验设计</td><td style="text-align:left;">不需要</td><td style="text-align:left;">必须精通</td><td style="text-align:left;">必须精通</td></tr><tr><td style="text-align:left;">商业模式设计</td><td style="text-align:left;">不需要</td><td style="text-align:left;">必须精通</td><td style="text-align:left;">必须精通</td></tr></tbody></table>

**核心结论**：AI PM 的技术能力是"T 型"结构——在"产品能力"这一竖向上要足够深，在"技术理解"这一横向上要足够宽。

* * *

##  二、技术理解的四个层次模型

为了更精确地回答"需要懂到什么程度"，我们建立了一个**四层次技术理解模型**：

###  层次一：知道（Know）——"我听过这个词"

**定义**：知道技术名词的存在，能大致说出它是做什么的。

**示例**：

-   知道"神经网络"是一种模仿人脑结构的计算模型
-   知道"Transformer"是一种处理序列数据的模型架构
-   知道"RAG"是一种让大模型读取外部知识的技术

**学习成本**：低（通过阅读科普文章、听播客即可） **应用场景**：日常交流、参加会议、阅读技术文档

###  层次二：理解（Understand）——"我能讲清楚原理"

**定义**：理解技术的核心原理、输入输出、适用场景和局限性。

**示例**：

-   理解神经网络是通过多层非线性变换来学习特征表示
-   理解 Transformer 的核心是"自注意力机制"，能捕捉序列中任意两个位置的关系
-   理解 RAG 的工作流程：用户提问→检索相关知识→拼接进 Prompt→模型生成答案

**学习成本**：中（需要系统学习课程、阅读教材） **应用场景**：需求评审、技术方案讨论、可行性评估

###  层次三：判断（Judge）——"我能判断可行性"

**定义**：基于对技术的理解，能够判断一个需求的技术可行性、成本、风险和优化方向。

**示例**：

-   判断"用 RAG 做企业知识库问答"是可行的，但需要解决文档切分、检索准确率、幻觉等问题
-   判断"用当前大模型做法律文书审查"准确率可能只有 80%，需要人工复核
-   判断"引入多模态能力"需要额外的算力成本，ROI 需要重新评估

**学习成本**：高（需要实践经验、和算法团队的深度协作） **应用场景**：产品规划、技术选型、资源分配

###  层次四：创造（Create）——"我能提出创新方案"

**定义**：基于对技术的深度理解，能够提出超越现有方案的创新产品设计。

**示例**：

-   提出"多 Agent 协作"的产品架构，让不同专长的 AI Agent 分工完成复杂任务
-   提出"模型即服务"（MaaS）的产品模式，把模型能力封装成标准化 API
-   提出"人在回路"（Human-in-the-Loop）的交互设计，平衡自动化和可控性

**学习成本**：非常高（需要长期积累、持续跟踪前沿） **应用场景**：产品战略、技术路线规划、创新项目

###  AI PM 各能力的要求层次

<table><thead><tr><th style="text-align:left;">技术领域</th><th style="text-align:left;">最低要求</th><th style="text-align:left;">建议达到</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">机器学习基础</td><td style="text-align:left;">理解</td><td style="text-align:left;">判断</td><td style="text-align:left;">所有 AI PM 的必备基础</td></tr><tr><td style="text-align:left;">深度学习原理</td><td style="text-align:left;">理解</td><td style="text-align:left;">理解</td><td style="text-align:left;">了解神经网络、CNN、RNN 即可</td></tr><tr><td style="text-align:left;">大语言模型（LLM）</td><td style="text-align:left;">理解</td><td style="text-align:left;">判断</td><td style="text-align:left;">当前最核心的技术领域</td></tr><tr><td style="text-align:left;">Prompt Engineering</td><td style="text-align:left;">判断</td><td style="text-align:left;">创造</td><td style="text-align:left;">可以直接影响产品效果</td></tr><tr><td style="text-align:left;">RAG/知识库</td><td style="text-align:left;">理解</td><td style="text-align:left;">判断</td><td style="text-align:left;">ToB AI PM 必须掌握</td></tr><tr><td style="text-align:left;">计算机视觉</td><td style="text-align:left;">知道</td><td style="text-align:left;">理解</td><td style="text-align:left;">做 CV 产品的 PM 需要达到判断</td></tr><tr><td style="text-align:left;">语音识别/合成</td><td style="text-align:left;">知道</td><td style="text-align:left;">理解</td><td style="text-align:left;">做语音产品的 PM 需要达到判断</td></tr><tr><td style="text-align:left;">推荐系统</td><td style="text-align:left;">理解</td><td style="text-align:left;">判断</td><td style="text-align:left;">做内容/电商 AI PM 必须掌握</td></tr><tr><td style="text-align:left;">模型评估</td><td style="text-align:left;">判断</td><td style="text-align:left;">创造</td><td style="text-align:left;">定义"好"的标准是 PM 的核心职责</td></tr><tr><td style="text-align:left;">算力/部署</td><td style="text-align:left;">知道</td><td style="text-align:left;">理解</td><td style="text-align:left;">了解成本结构和部署方式</td></tr><tr><td style="text-align:left;">数据工程</td><td style="text-align:left;">知道</td><td style="text-align:left;">理解</td><td style="text-align:left;">了解数据 pipeline 和标注流程</td></tr></tbody></table>

* * *

##  三、AI PM 技术知识全景图

在深入每个技术领域之前，先建立一张**全景地图**，让你知道 AI 技术体系的全貌：

![](https://oss.fullcoding.cn/20260522/0eca4855-f653-4066-99e8-b992aec116be_1779437811652.png)

AI PM 的技术理解，应该**从应用层向下穿透到模型层**，对框架层、数据层、基础设施层达到"知道"或"理解"层次即可。

* * *

##  四、核心技术概念详解

###  （一）机器学习基础概念

####  1. 什么是机器学习？

**定义**：机器学习（Machine Learning, ML）是让计算机从数据中自动学习规律，而无需明确编程的方法。

**通俗解释**：传统编程是"人告诉计算机规则，计算机执行"；机器学习是"人给计算机数据和答案，计算机自己发现规则"。

**AI PM 需要理解的核心点**：

-   机器学习不是魔法，它依赖于**数据质量**和**特征设计**
-   模型的效果天花板由**数据**决定，而不是算法
-   机器学习擅长处理"有明确输入输出映射"的问题，不擅长处理需要常识推理的问题

####  2. 机器学习的三大类型

<table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th><th style="text-align:left;">典型应用</th><th style="text-align:left;">数据要求</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>监督学习</strong></td><td style="text-align:left;">用"输入+正确答案"的数据训练模型</td><td style="text-align:left;">垃圾邮件识别、房价预测、图像分类</td><td style="text-align:left;">需要大量标注数据</td></tr><tr><td style="text-align:left;"><strong>无监督学习</strong></td><td style="text-align:left;">用没有标注的数据让模型自己发现规律</td><td style="text-align:left;">用户分群、异常检测、降维</td><td style="text-align:left;">不需要标注数据</td></tr><tr><td style="text-align:left;"><strong>强化学习</strong></td><td style="text-align:left;">让模型通过"试错+奖励"来学习策略</td><td style="text-align:left;">游戏 AI（AlphaGo）、机器人控制、推荐系统</td><td style="text-align:left;">需要设计奖励函数</td></tr></tbody></table>

**AI PM 的应用场景**：

-   做智能客服：属于**监督学习**（需要大量"问题-答案"的标注对）
-   做用户画像：可以用**无监督学习**（聚类发现用户群体）
-   做个性化推荐：可以用**强化学习**（根据用户点击反馈调整推荐策略）

####  3. 核心评估指标

<table><thead><tr><th style="text-align:left;">指标</th><th style="text-align:left;">定义</th><th style="text-align:left;">适用场景</th><th style="text-align:left;">AI PM 关注点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>准确率（Accuracy）</strong></td><td style="text-align:left;">预测正确的比例</td><td style="text-align:left;">类别均衡的分类任务</td><td style="text-align:left;">最直观但不总是最有用</td></tr><tr><td style="text-align:left;"><strong>精确率（Precision）</strong></td><td style="text-align:left;">预测为正例中实际为正例的比例</td><td style="text-align:left;">对"误报"敏感的场景（如垃圾邮件）</td><td style="text-align:left;">"宁可漏报，不可错杀"</td></tr><tr><td style="text-align:left;"><strong>召回率（Recall）</strong></td><td style="text-align:left;">实际为正例中被预测为正例的比例</td><td style="text-align:left;">对"漏报"敏感的场景（如疾病筛查）</td><td style="text-align:left;">"宁可错杀，不可漏报"</td></tr><tr><td style="text-align:left;"><strong>F1 值</strong></td><td style="text-align:left;">Precision 和 Recall 的调和平均</td><td style="text-align:left;">需要平衡精确率和召回率</td><td style="text-align:left;">综合指标</td></tr><tr><td style="text-align:left;"><strong>AUC-ROC</strong></td><td style="text-align:left;">模型区分正负例能力的综合指标</td><td style="text-align:left;">二分类任务</td><td style="text-align:left;">越高越好，0.5 等于随机猜</td></tr><tr><td style="text-align:left;"><strong>BLEU/ROUGE</strong></td><td style="text-align:left;">文本生成质量指标</td><td style="text-align:left;">机器翻译、文本摘要</td><td style="text-align:left;">和人类评估有差距</td></tr><tr><td style="text-align:left;"><strong>mAP</strong></td><td style="text-align:left;">目标检测平均精度</td><td style="text-align:left;">图像目标检测</td><td style="text-align:left;">衡量检测框的准确性和召回</td></tr></tbody></table>

**关键认知**：没有"最好的指标"，只有"最适合当前业务目标的指标"。AI PM 的核心职责之一，就是和算法团队一起定义"用什么指标衡量成功"。

####  4. 过拟合与欠拟合

<table><thead><tr><th style="text-align:left;">问题</th><th style="text-align:left;">表现</th><th style="text-align:left;">原因</th><th style="text-align:left;">解决方案</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>欠拟合</strong></td><td style="text-align:left;">模型在训练数据和测试数据上表现都差</td><td style="text-align:left;">模型太简单，无法捕捉数据规律</td><td style="text-align:left;">增加模型复杂度、增加特征</td></tr><tr><td style="text-align:left;"><strong>过拟合</strong></td><td style="text-align:left;">模型在训练数据上表现好，但在新数据上表现差</td><td style="text-align:left;">模型太复杂，记住了训练数据的噪声</td><td style="text-align:left;">增加数据量、正则化、简化模型</td></tr></tbody></table>

**AI PM 的关注点**：过拟合是产品上线的隐形杀手——模型在内部测试时效果很好，但上线后用户反馈很差。PM 需要关注"训练集指标"和"线上真实效果"的差异。

####  5. 偏差（Bias）与方差（Variance）

**偏差**：模型对真实规律的假设过于简化，导致系统性错误。 **方差**：模型对训练数据的微小变化过于敏感，导致不稳定。

**通俗理解**：

-   高偏差 = "一刀切"（比如用"所有邮件都是垃圾邮件"来做分类）
-   高方差 = "过于敏感"（模型记住了每一封训练邮件的细节，对新邮件无法泛化）

**AI PM 的应用**：当算法团队说"模型方差太高"时，你知道他们需要的是更多样化的训练数据或更强的正则化。

###  （二）深度学习与神经网络

####  1. 神经网络的基本原理

**核心思想**：神经网络由大量简单的"神经元"（计算单元）组成，通过层层变换，从原始数据中提取越来越抽象的特征。

**AI PM 需要理解的结构**：

-   **输入层**：接收原始数据（如图片像素、文本词向量）
-   **隐藏层**：进行特征变换和抽象（层数越深，特征越抽象）
-   **输出层**：产生最终预测结果（如分类概率、生成的文本）

**关键概念——参数（Parameters）**：

-   神经网络的"知识"存储在参数中（权重和偏置）
-   大模型的参数数量从几亿到几万亿不等
-   参数越多，模型的表达能力越强，但训练和推理成本也越高

####  2. 主流神经网络架构

<table><thead><tr><th style="text-align:left;">架构</th><th style="text-align:left;">核心特点</th><th style="text-align:left;">典型应用</th><th style="text-align:left;">AI PM 需要知道的</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>CNN（卷积神经网络）</strong></td><td style="text-align:left;">擅长捕捉局部空间特征</td><td style="text-align:left;">图像分类、目标检测、人脸识别</td><td style="text-align:left;">图像类 AI 产品的基础</td></tr><tr><td style="text-align:left;"><strong>RNN（循环神经网络）</strong></td><td style="text-align:left;">擅长处理序列数据，有记忆能力</td><td style="text-align:left;">文本生成、语音识别</td><td style="text-align:left;">已被 Transformer 取代</td></tr><tr><td style="text-align:left;"><strong>LSTM/GRU</strong></td><td style="text-align:left;">RNN 的改进版，解决长距离依赖问题</td><td style="text-align:left;">机器翻译、情感分析</td><td style="text-align:left;">了解即可，已被 Transformer 取代</td></tr><tr><td style="text-align:left;"><strong>Transformer</strong></td><td style="text-align:left;">基于自注意力机制，并行处理能力强</td><td style="text-align:left;">大语言模型、机器翻译</td><td style="text-align:left;"><strong>当前最重要的架构</strong></td></tr><tr><td style="text-align:left;"><strong>GAN（生成对抗网络）</strong></td><td style="text-align:left;">生成器和判别器对抗训练</td><td style="text-align:left;">图像生成、风格迁移</td><td style="text-align:left;">Midjourney 的早期基础</td></tr><tr><td style="text-align:left;"><strong>Diffusion（扩散模型）</strong></td><td style="text-align:left;">通过逐步去噪生成数据</td><td style="text-align:left;">图像生成（Stable Diffusion）、视频生成</td><td style="text-align:left;">当前图像/视频生成的主流</td></tr></tbody></table>

####  3. Transformer 架构详解（AI PM 必须深入理解）

Transformer 是当前几乎所有大语言模型的基础架构，AI PM 需要达到"理解"甚至"判断"层次。

**核心组件**：

<table><thead><tr><th style="text-align:left;">组件</th><th style="text-align:left;">功能</th><th style="text-align:left;">AI PM 理解要点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>自注意力机制（Self-Attention）</strong></td><td style="text-align:left;">让模型在处理一个 token 时，能看到序列中所有其他 token</td><td style="text-align:left;">这是 Transformer 理解上下文的核心；注意力权重决定了模型"关注"哪些词</td></tr><tr><td style="text-align:left;"><strong>多头注意力（Multi-Head Attention）</strong></td><td style="text-align:left;">并行使用多组注意力机制，捕捉不同维度的关系</td><td style="text-align:left;">增加了模型的表达能力，但也增加了计算量</td></tr><tr><td style="text-align:left;"><strong>位置编码（Positional Encoding）</strong></td><td style="text-align:left;">给模型提供序列中每个词的位置信息</td><td style="text-align:left;">因为自注意力本身没有位置概念，需要额外编码</td></tr><tr><td style="text-align:left;"><strong>前馈网络（Feed-Forward Network）</strong></td><td style="text-align:left;">对每个 token 独立进行非线性变换</td><td style="text-align:left;">增加了模型的表达能力</td></tr><tr><td style="text-align:left;"><strong>层归一化（Layer Normalization）</strong></td><td style="text-align:left;">稳定训练过程，加速收敛</td><td style="text-align:left;">训练大模型的关键技术</td></tr></tbody></table>

**为什么 Transformer 如此重要？**

-   相比 RNN，Transformer 可以**并行处理**整个序列，训练速度大幅提升
-   自注意力机制让模型能捕捉**任意距离**的依赖关系
-   架构简单、可扩展性强，可以通过**增加层数和参数量**持续提升效果

**AI PM 的应用场景**：

-   当算法团队说"上下文窗口太小"时，你知道这是 Transformer 的位置编码和注意力计算的物理限制
-   当算法团队说"模型太大了，推理慢"时，你知道可以通过模型压缩（量化、剪枝、蒸馏）来优化

###  （三）大语言模型（LLM）核心知识

大语言模型是当前 AI PM 必须深入理解的技术领域，本节将系统讲解。

####  1. 什么是大语言模型？

**定义**：大语言模型（Large Language Model, LLM）是基于 Transformer 架构、经过海量文本数据训练的深度学习模型，能够理解和生成自然语言。

**核心特征**：

-   **大**：参数量巨大（从几亿到几万亿）
-   **通用**：不针对特定任务训练，而是通过"预训练+微调"适应各种任务
-   **生成式**：能生成连贯、有意义的文本
-   **上下文学习**：通过 Prompt 中的示例学习新任务，无需重新训练

####  2. LLM 的训练三阶段

<table><thead><tr><th style="text-align:left;">阶段</th><th style="text-align:left;">名称</th><th style="text-align:left;">做什么</th><th style="text-align:left;">数据量</th><th style="text-align:left;">成本</th><th style="text-align:left;">AI PM 关注点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>第一阶段</strong></td><td style="text-align:left;">预训练（Pre-training）</td><td style="text-align:left;">在海量文本上学习语言规律和世界知识</td><td style="text-align:left;">数万亿 token</td><td style="text-align:left;">极高（数百万美元）</td><td style="text-align:left;">预训练决定了模型的"知识储备"和"语言能力"</td></tr><tr><td style="text-align:left;"><strong>第二阶段</strong></td><td style="text-align:left;">监督微调（SFT）</td><td style="text-align:left;">用高质量对话数据教模型如何正确回答</td><td style="text-align:left;">数万到数十万条</td><td style="text-align:left;">中等</td><td style="text-align:left;">SFT 决定了模型的"对话风格"和"基本礼貌"</td></tr><tr><td style="text-align:left;"><strong>第三阶段</strong></td><td style="text-align:left;">RLHF / DPO</td><td style="text-align:left;">用人类反馈训练模型输出更符合人类偏好</td><td style="text-align:left;">数万条偏好数据</td><td style="text-align:left;">中等</td><td style="text-align:left;">决定了模型的"价值观"和"安全性"</td></tr></tbody></table>

**AI PM 的核心认知**：

-   99% 的 AI PM 不需要参与预训练（成本太高）
-   大多数 AI PM 的工作集中在**应用层**：设计 Prompt、搭建 RAG、做产品化封装
-   如果你在做垂直领域产品（如法律、医疗），可能需要做**领域微调**

####  3. LLM 的核心能力

<table><thead><tr><th style="text-align:left;">能力</th><th style="text-align:left;">说明</th><th style="text-align:left;">产品应用</th><th style="text-align:left;">局限性</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>文本生成</strong></td><td style="text-align:left;">根据 Prompt 生成连贯文本</td><td style="text-align:left;">写作助手、代码生成、邮件起草</td><td style="text-align:left;">可能产生幻觉</td></tr><tr><td style="text-align:left;"><strong>文本理解</strong></td><td style="text-align:left;">理解文本的含义、情感、意图</td><td style="text-align:left;">情感分析、意图识别、分类</td><td style="text-align:left;">对复杂逻辑推理能力有限</td></tr><tr><td style="text-align:left;"><strong>知识问答</strong></td><td style="text-align:left;">基于训练数据中的知识回答问题</td><td style="text-align:left;">智能客服、知识库问答</td><td style="text-align:left;">知识有截止日期，可能过时</td></tr><tr><td style="text-align:left;"><strong>摘要提取</strong></td><td style="text-align:left;">从长文本中提取关键信息</td><td style="text-align:left;">会议摘要、论文摘要</td><td style="text-align:left;">可能遗漏重要细节</td></tr><tr><td style="text-align:left;"><strong>翻译</strong></td><td style="text-align:left;">在不同语言之间转换</td><td style="text-align:left;">多语言产品、跨境业务</td><td style="text-align:left;">小语种效果较差</td></tr><tr><td style="text-align:left;"><strong>推理</strong></td><td style="text-align:left;">进行逻辑推理、数学计算</td><td style="text-align:left;">智能辅导、决策辅助</td><td style="text-align:left;">复杂推理容易出错</td></tr><tr><td style="text-align:left;"><strong>代码能力</strong></td><td style="text-align:left;">理解、生成、调试代码</td><td style="text-align:left;">编程助手、代码审查</td><td style="text-align:left;">对复杂架构理解有限</td></tr></tbody></table>

####  4. LLM 的核心参数与概念

<table><thead><tr><th style="text-align:left;">概念</th><th style="text-align:left;">定义</th><th style="text-align:left;">AI PM 需要理解的深度</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Token</strong></td><td style="text-align:left;">模型处理文本的最小单位（可以是一个字、一个词或一个子词）</td><td style="text-align:left;">理解：1 个汉字 ≈ 1-2 token，1 个英文单词 ≈ 1-1.5 token；Token 数量直接影响成本</td></tr><tr><td style="text-align:left;"><strong>上下文窗口（Context Window）</strong></td><td style="text-align:left;">模型一次能处理的最大 Token 数</td><td style="text-align:left;">理解：当前主流模型支持 128K-200K token；超长文档需要分段或 RAG</td></tr><tr><td style="text-align:left;"><strong>Temperature</strong></td><td style="text-align:left;">控制输出随机性的参数（0-2）</td><td style="text-align:left;">判断：Temperature 低（0.1-0.3）适合确定性任务；Temperature 高（0.7-1.0）适合创意任务</td></tr><tr><td style="text-align:left;"><strong>Top-p / Top-k</strong></td><td style="text-align:left;">控制输出多样性的采样策略</td><td style="text-align:left;">知道：Top-p 是更平滑的控制方式；一般和 Temperature 配合使用</td></tr><tr><td style="text-align:left;"><strong>Max Tokens</strong></td><td style="text-align:left;">限制模型输出的最大 Token 数</td><td style="text-align:left;">理解：需要根据任务设定合理的输出长度，避免过长（费钱）或过短（不完整）</td></tr><tr><td style="text-align:left;"><strong>System Prompt</strong></td><td style="text-align:left;">给模型的全局指令，定义角色和行为</td><td style="text-align:left;">判断：System Prompt 是产品化的核心手段；设计好的 System Prompt 能大幅提升效果</td></tr><tr><td style="text-align:left;"><strong>Few-shot Prompt</strong></td><td style="text-align:left;">在 Prompt 中提供几个示例，让模型学习</td><td style="text-align:left;">理解：Few-shot 能显著提升特定任务的准确率，但需要消耗上下文窗口</td></tr><tr><td style="text-align:left;"><strong>幻觉（Hallucination）</strong></td><td style="text-align:left;">模型生成看似合理但实际错误的内容</td><td style="text-align:left;">判断：所有 LLM 都会产生幻觉；需要通过 RAG、事实核查、人工审核来降低</td></tr><tr><td style="text-align:left;"><strong>涌现能力（Emergence）</strong></td><td style="text-align:left;">模型规模达到某个阈值后突然展现的新能力</td><td style="text-align:left;">知道：这是 LLM 的神奇之处，但具体机制还不完全清楚</td></tr></tbody></table>

####  5. LLM 的成本结构

AI PM 必须理解 LLM 的成本，因为这直接影响产品定价和商业模式。

<table><thead><tr><th style="text-align:left;">成本项</th><th style="text-align:left;">说明</th><th style="text-align:left;">计算方式</th><th style="text-align:left;">优化方向</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>输入 Token 成本</strong></td><td style="text-align:left;">处理用户输入（Prompt）的费用</td><td style="text-align:left;">按输入 Token 数计费</td><td style="text-align:left;">精简 Prompt、压缩历史上下文</td></tr><tr><td style="text-align:left;"><strong>输出 Token 成本</strong></td><td style="text-align:left;">生成模型回复的费用</td><td style="text-align:left;">按输出 Token 数计费</td><td style="text-align:left;">限制 Max Tokens、优化输出质量</td></tr><tr><td style="text-align:left;"><strong>模型调用成本</strong></td><td style="text-align:left;">每次 API 调用的基础费用</td><td style="text-align:left;">按调用次数计费</td><td style="text-align:left;">合并请求、缓存常见回复</td></tr><tr><td style="text-align:left;"><strong>微调成本</strong></td><td style="text-align:left;">对模型进行领域微调的费用</td><td style="text-align:left;">按训练 Token 数和时间计费</td><td style="text-align:left;">评估是否真的需要微调</td></tr><tr><td style="text-align:left;"><strong>推理延迟成本</strong></td><td style="text-align:left;">用户等待时间的隐性成本</td><td style="text-align:left;">影响用户体验和留存</td><td style="text-align:left;">模型压缩、推理加速、流式输出</td></tr></tbody></table>

**典型定价参考**（以 GPT-4 级别模型为例）：

-   输入：$10-30 / 百万 Token
-   输出：$30-60 / 百万 Token
-   一次典型对话（输入 500 token + 输出 300 token）成本约 $0.01-0.03

**AI PM 的计算题**：如果你的产品每天有 10 万活跃用户，每人每天进行 20 轮对话，每轮对话平均消耗 800 token（输入+输出），按 $20/百万 token 计算：

-   日 Token 消耗：100,000 × 20 × 800 = 1.6 亿 token
-   日成本：1.6 亿 × $20 / 100 万 = $3,200 ≈ ¥23,000
-   月成本：约 ¥70 万
-   **结论**：如果 ARPU 低于 ¥7/月，这个产品在经济上不可持续

####  6. RAG（检索增强生成）

**定义**：RAG（Retrieval-Augmented Generation）是一种让大模型在生成回答时，先从外部知识库中检索相关信息，再基于检索到的内容生成答案的技术。

**为什么需要 RAG？**

-   LLM 的知识有截止日期，无法获取最新信息
-   LLM 可能产生幻觉，编造不存在的信息
-   企业有私有数据，模型在训练时没见过
-   需要控制模型的回答范围，避免答非所问

**RAG 的工作流程**：

```
用户提问 → 向量化 → 向量检索 → 召回 Top-K 文档 → 拼接进 Prompt → LLM 生成答案
```

**RAG 的核心组件**：

<table><thead><tr><th style="text-align:left;">组件</th><th style="text-align:left;">功能</th><th style="text-align:left;">AI PM 关注点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>文档切分（Chunking）</strong></td><td style="text-align:left;">把长文档切成适合检索的小块</td><td style="text-align:left;">切分策略直接影响检索效果：按段落切？按语义切？重叠多少？</td></tr><tr><td style="text-align:left;"><strong>Embedding 模型</strong></td><td style="text-align:left;">把文本变成向量（高维数字表示）</td><td style="text-align:left;">不同的 Embedding 模型效果差异很大；中文场景需要选中文优化过的模型</td></tr><tr><td style="text-align:left;"><strong>向量数据库</strong></td><td style="text-align:left;">存储和检索向量</td><td style="text-align:left;">选型考虑：召回速度、支持的向量维度、成本</td></tr><tr><td style="text-align:left;"><strong>重排序（Reranker）</strong></td><td style="text-align:left;">对初筛的结果进行精排</td><td style="text-align:left;">能显著提升最终检索准确率，但会增加延迟</td></tr><tr><td style="text-align:left;"><strong>Prompt 拼接</strong></td><td style="text-align:left;">把检索到的内容组织进 Prompt</td><td style="text-align:left;">需要设计模板：如何引用来源、如何处理冲突信息</td></tr></tbody></table>

**RAG 的常见问题与优化**：

<table><thead><tr><th style="text-align:left;">问题</th><th style="text-align:left;">表现</th><th style="text-align:left;">优化方案</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>检索不到</strong></td><td style="text-align:left;">用户问的问题，知识库里有答案但检索不出来</td><td style="text-align:left;">优化切分策略、换更好的 Embedding 模型、增加同义词扩展</td></tr><tr><td style="text-align:left;"><strong>检索不准</strong></td><td style="text-align:left;">检索到的文档和用户问题无关</td><td style="text-align:left;">引入重排序、增加过滤条件、优化文档质量</td></tr><tr><td style="text-align:left;"><strong>答案不完整</strong></td><td style="text-align:left;">检索到的内容不全面，导致答案缺失关键信息</td><td style="text-align:left;">增加召回数量、多路召回、优化 Prompt</td></tr><tr><td style="text-align:left;"><strong>幻觉仍存在</strong></td><td style="text-align:left;">模型在检索内容基础上仍编造信息</td><td style="text-align:left;">严格要求模型基于检索内容回答、增加事实核查层</td></tr></tbody></table>

**AI PM 的核心职责**：RAG 是一个系统工程，不是"接上向量数据库就万事大吉"。PM 需要统筹定义文档规范、切分策略、评估标准、兜底机制。

####  7. Prompt Engineering（提示工程）

**定义**：Prompt Engineering 是设计和优化输入给大模型的指令（Prompt），以获得最佳输出效果的技术。

**为什么 Prompt Engineering 是 AI PM 的核心技能？**

-   不需要修改模型，通过调整输入就能改变输出效果
-   成本低、迭代快，是产品优化的最快路径
-   直接影响用户体验，是产品差异化的重要来源

**Prompt 设计原则**：

<table><thead><tr><th style="text-align:left;">原则</th><th style="text-align:left;">说明</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>清晰具体</strong></td><td style="text-align:left;">告诉模型"做什么"和"怎么做"</td><td style="text-align:left;">❌ "写一篇文章" → ✅ "写一篇 800 字的产品介绍，面向企业 CIO，突出安全性和成本优势"</td></tr><tr><td style="text-align:left;"><strong>角色设定</strong></td><td style="text-align:left;">给模型一个明确的角色</td><td style="text-align:left;">"你是一位有 10 年经验的 SaaS 产品经理"</td></tr><tr><td style="text-align:left;"><strong>输出格式</strong></td><td style="text-align:left;">明确指定输出的结构和格式</td><td style="text-align:left;">"请用 JSON 格式输出，包含 title、summary、tags 三个字段"</td></tr><tr><td style="text-align:left;"><strong>边界条件</strong></td><td style="text-align:left;">告诉模型什么不该做</td><td style="text-align:left;">"不要编造信息，如果不知道就回答'我无法确认'"</td></tr><tr><td style="text-align:left;"><strong>Few-shot 示例</strong></td><td style="text-align:left;">提供输入输出的示例</td><td style="text-align:left;">"以下是几个示例：输入 X → 输出 Y"</td></tr><tr><td style="text-align:left;"><strong>思维链（CoT）</strong></td><td style="text-align:left;">让模型一步步思考</td><td style="text-align:left;">"请逐步分析：首先...然后...最后..."</td></tr></tbody></table>

**高级 Prompt 技术**：

<table><thead><tr><th style="text-align:left;">技术</th><th style="text-align:left;">原理</th><th style="text-align:left;">适用场景</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Chain-of-Thought（CoT）</strong></td><td style="text-align:left;">让模型在回答前先生成推理过程</td><td style="text-align:left;">数学计算、逻辑推理、复杂决策</td></tr><tr><td style="text-align:left;"><strong>ReAct</strong></td><td style="text-align:left;">让模型交替进行"推理"和"行动"</td><td style="text-align:left;">需要调用工具或 API 的任务</td></tr><tr><td style="text-align:left;"><strong>Self-Consistency</strong></td><td style="text-align:left;">让模型多次生成，投票选出最一致的答案</td><td style="text-align:left;">对准确性要求高的场景</td></tr><tr><td style="text-align:left;"><strong>Tree of Thoughts</strong></td><td style="text-align:left;">让模型探索多个推理路径，选择最优</td><td style="text-align:left;">复杂问题求解、策略制定</td></tr></tbody></table>

###  （四）计算机视觉（CV）

####  1. CV 的核心任务

<table><thead><tr><th style="text-align:left;">任务</th><th style="text-align:left;">定义</th><th style="text-align:left;">典型应用</th><th style="text-align:left;">AI PM 需要理解的</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>图像分类</strong></td><td style="text-align:left;">判断图片属于哪个类别</td><td style="text-align:left;">内容审核、医疗影像诊断</td><td style="text-align:left;">准确率指标、类别不平衡问题</td></tr><tr><td style="text-align:left;"><strong>目标检测</strong></td><td style="text-align:left;">在图片中定位并识别多个物体</td><td style="text-align:left;">自动驾驶、安防监控、工业质检</td><td style="text-align:left;">mAP 指标、检测框精度</td></tr><tr><td style="text-align:left;"><strong>图像分割</strong></td><td style="text-align:left;">精确到像素级别地识别物体边界</td><td style="text-align:left;">医学影像、图像编辑</td><td style="text-align:left;">语义分割 vs 实例分割</td></tr><tr><td style="text-align:left;"><strong>图像生成</strong></td><td style="text-align:left;">根据描述或条件生成新图像</td><td style="text-align:left;">AI 绘画、设计辅助、电商素材</td><td style="text-align:left;">Diffusion 模型原理、生成质量评估</td></tr><tr><td style="text-align:left;"><strong>OCR（文字识别）</strong></td><td style="text-align:left;">从图片中提取文字</td><td style="text-align:left;">证件识别、发票识别、文档数字化</td><td style="text-align:left;">识别准确率、版面分析</td></tr><tr><td style="text-align:left;"><strong>人脸识别</strong></td><td style="text-align:left;">识别或验证人脸身份</td><td style="text-align:left;">门禁系统、支付验证、相册分类</td><td style="text-align:left;">准确率、隐私合规</td></tr><tr><td style="text-align:left;"><strong>视频分析</strong></td><td style="text-align:left;">对视频内容进行理解和分析</td><td style="text-align:left;">行为识别、内容审核、智能剪辑</td><td style="text-align:left;">时序建模、计算成本</td></tr></tbody></table>

####  2. 图像生成模型详解

<table><thead><tr><th style="text-align:left;">模型</th><th style="text-align:left;">原理</th><th style="text-align:left;">特点</th><th style="text-align:left;">代表产品</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>GAN</strong></td><td style="text-align:left;">生成器和判别器对抗</td><td style="text-align:left;">生成速度快，但训练不稳定</td><td style="text-align:left;">早期换脸应用</td></tr><tr><td style="text-align:left;"><strong>VAE</strong></td><td style="text-align:left;">学习数据的潜在表示</td><td style="text-align:left;">生成结果稳定但质量一般</td><td style="text-align:left;">早期图像生成</td></tr><tr><td style="text-align:left;"><strong>Diffusion</strong></td><td style="text-align:left;">逐步去噪生成图像</td><td style="text-align:left;">质量高、可控性强，但生成慢</td><td style="text-align:left;">Midjourney、Stable Diffusion、DALL-E</td></tr></tbody></table>

**AI PM 的关注点**：

-   图像生成的**成本**：生成一张 1024×1024 的图像需要多少 GPU 时间？
-   **可控性**：如何控制生成图像的风格、构图、细节？
-   **版权问题**：生成图像的版权归属？训练数据的版权合规？
-   **安全性**：如何防止生成有害内容（色情、暴力、虚假新闻）？

###  （五）语音识别与合成

####  1. 语音技术栈

```
音频输入 → 特征提取 → 声学模型 → 语言模型 → 文本输出（ASR）
文本输入 → 文本分析 → 声学模型 → 声码器 → 音频输出（TTS）
```

####  2. ASR（自动语音识别）

<table><thead><tr><th style="text-align:left;">概念</th><th style="text-align:left;">说明</th><th style="text-align:left;">AI PM 关注点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>WER（词错误率）</strong></td><td style="text-align:left;">识别结果与正确文本的差异比例</td><td style="text-align:left;">行业标准：普通话 WER &lt; 5% 算优秀</td></tr><tr><td style="text-align:left;"><strong>说话人自适应</strong></td><td style="text-align:left;">模型适应特定说话人的声音特征</td><td style="text-align:left;">影响用户体验：是否需要用户先训练？</td></tr><tr><td style="text-align:left;"><strong>远场识别</strong></td><td style="text-align:left;">在远距离/嘈杂环境下的识别</td><td style="text-align:left;">智能音箱、会议场景的关键指标</td></tr><tr><td style="text-align:left;"><strong>实时率（RTF）</strong></td><td style="text-align:left;">处理 1 秒音频需要的计算时间</td><td style="text-align:left;">RTF &lt; 0.3 才能实现实时识别</td></tr></tbody></table>

####  3. TTS（文本转语音）

<table><thead><tr><th style="text-align:left;">技术路线</th><th style="text-align:left;">特点</th><th style="text-align:left;">代表</th><th style="text-align:left;">AI PM 关注点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>拼接合成</strong></td><td style="text-align:left;">从语音库中拼接片段</td><td style="text-align:left;">早期导航系统</td><td style="text-align:left;">自然度差，已淘汰</td></tr><tr><td style="text-align:left;"><strong>参数合成</strong></td><td style="text-align:left;">用数学模型生成语音参数</td><td style="text-align:left;">早期 Siri</td><td style="text-align:left;">自然度一般，占用资源小</td></tr><tr><td style="text-align:left;"><strong>端到端神经网络</strong></td><td style="text-align:left;">直接用神经网络生成语音波形</td><td style="text-align:left;">GPT-SoVITS、ElevenLabs</td><td style="text-align:left;">自然度极高，但成本高</td></tr><tr><td style="text-align:left;"><strong>声音克隆</strong></td><td style="text-align:left;">用少量样本克隆特定声音</td><td style="text-align:left;">讯飞、ElevenLabs</td><td style="text-align:left;">版权、伦理、安全性问题</td></tr></tbody></table>

**TTS 的关键指标**：

-   **MOS（平均意见分）**：人工评分 1-5 分，衡量自然度
-   **相似度**：克隆声音和原声音的相似程度
-   **实时率**：生成 1 秒语音需要的计算时间
-   **支持语言/方言**：多语言能力是重要的产品差异化点

###  （六）推荐系统

####  1. 推荐系统的核心逻辑

推荐系统的本质：**在信息过载的场景下，帮助用户高效发现感兴趣的内容。**

####  2. 推荐系统的技术架构

```
用户行为数据 → 特征工程 → 召回层 → 排序层 → 重排序层 → 展示
```

<table><thead><tr><th style="text-align:left;">层级</th><th style="text-align:left;">功能</th><th style="text-align:left;">技术方法</th><th style="text-align:left;">AI PM 关注点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>召回层</strong></td><td style="text-align:left;">从海量内容中快速筛选候选集</td><td style="text-align:left;">协同过滤、向量召回、热度召回</td><td style="text-align:left;">召回率：好的内容有没有被漏掉？</td></tr><tr><td style="text-align:left;"><strong>排序层</strong></td><td style="text-align:left;">对候选集进行精确排序</td><td style="text-align:left;">深度学习模型（DIN、DCN）</td><td style="text-align:left;">排序准确率：排在前面的内容用户是否感兴趣？</td></tr><tr><td style="text-align:left;"><strong>重排序层</strong></td><td style="text-align:left;">业务规则调整（多样性、新鲜度、广告插入）</td><td style="text-align:left;">规则引擎、多目标优化</td><td style="text-align:left;">用户体验：不能一直推荐同类内容</td></tr></tbody></table>

####  3. 推荐系统的核心算法

<table><thead><tr><th style="text-align:left;">算法</th><th style="text-align:left;">原理</th><th style="text-align:left;">适用场景</th><th style="text-align:left;">优缺点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>协同过滤（CF）</strong></td><td style="text-align:left;">找到和你相似的用户，推荐他们喜欢的内容</td><td style="text-align:left;">电商、音乐、电影</td><td style="text-align:left;">简单有效，但冷启动问题严重</td></tr><tr><td style="text-align:left;"><strong>内容-based</strong></td><td style="text-align:left;">根据内容特征匹配用户兴趣</td><td style="text-align:left;">新闻、文章</td><td style="text-align:left;">不需要用户行为数据，但推荐范围窄</td></tr><tr><td style="text-align:left;"><strong>矩阵分解</strong></td><td style="text-align:left;">把用户-物品矩阵分解为低维表示</td><td style="text-align:left;">评分预测</td><td style="text-align:left;">能处理稀疏数据，但可解释性差</td></tr><tr><td style="text-align:left;"><strong>深度学习推荐</strong></td><td style="text-align:left;">用神经网络学习用户和内容的复杂交互</td><td style="text-align:left;">大型内容平台</td><td style="text-align:left;">效果好，但计算成本高</td></tr></tbody></table>

####  4. 推荐系统的评估指标

<table><thead><tr><th style="text-align:left;">指标</th><th style="text-align:left;">定义</th><th style="text-align:left;">适用场景</th><th style="text-align:left;">AI PM 关注点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>点击率（CTR）</strong></td><td style="text-align:left;">推荐内容被点击的比例</td><td style="text-align:left;">所有推荐场景</td><td style="text-align:left;">最直观的指标，但不等于用户满意</td></tr><tr><td style="text-align:left;"><strong>转化率（CVR）</strong></td><td style="text-align:left;">点击后完成目标行为的比例</td><td style="text-align:left;">电商、广告</td><td style="text-align:left;">直接关联商业价值</td></tr><tr><td style="text-align:left;"><strong>多样性</strong></td><td style="text-align:left;">推荐内容覆盖的类别广度</td><td style="text-align:left;">内容平台</td><td style="text-align:left;">防止"信息茧房"</td></tr><tr><td style="text-align:left;"><strong>新颖性</strong></td><td style="text-align:left;">推荐用户之前没见过的内容</td><td style="text-align:left;">发现类场景</td><td style="text-align:left;">平衡探索和 exploitation</td></tr><tr><td style="text-align:left;"><strong>覆盖率</strong></td><td style="text-align:left;">长尾内容被推荐的比例</td><td style="text-align:left;">内容生态</td><td style="text-align:left;">保护长尾创作者</td></tr><tr><td style="text-align:left;"><strong>用户停留时长</strong></td><td style="text-align:left;">用户在推荐内容上的总时间</td><td style="text-align:left;">内容平台</td><td style="text-align:left;">衡量用户粘性</td></tr></tbody></table>

* * *

##  五、AI 产品技术架构全景

作为 AI PM，你需要理解一个 AI 产品从数据到用户的完整技术链路：

![](https://oss.fullcoding.cn/20260522/1164a3c9-4dc6-48f5-bcf9-540352bcdc64_1779438004639.png)

**AI PM 的架构关注点**：

-   **模块化设计**：模型层和应用服务层解耦，方便替换模型
-   **弹性伸缩**：用户量波动大时，推理服务能自动扩缩容
-   **灰度发布**：新模型上线时，先灰度给部分用户，验证效果后再全量
-   **降级策略**：模型服务异常时，能自动切换到备用方案（如规则引擎、缓存回复）

* * *

##  六、基础工程概念详解：AI PM 必须懂的"技术常识"

除了 AI 特有的技术（机器学习、大模型、RAG），AI PM 还必须掌握一套**基础工程概念**。这些概念是互联网产品的通用技术语言——不懂它们，你在需求评审时会被前后端工程师"说懵"，在评估技术方案时会漏掉关键风险点，在和运维沟通时会无法理解"为什么上线又挂了"。

本节用尽量通俗的语言，讲清楚每一个概念"是什么、为什么重要、AI PM 需要关注什么"。

* * *

###  （一）前端（Frontend）与后端（Backend）

####  1. 前端：用户能看到和触摸到的部分

**定义**：前端是产品在用户设备上直接呈现和交互的部分，包括视觉界面、动画效果、用户操作响应。

**通俗理解**：前端就是"门面"——用户打开你的 App 或网页，看到的按钮、文字、图片、动画，都是前端工程师写的。

**前端技术栈**：

<table><thead><tr><th style="text-align:left;">技术</th><th style="text-align:left;">用途</th><th style="text-align:left;">AI PM 需要知道的</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>HTML/CSS</strong></td><td style="text-align:left;">网页的结构和样式</td><td style="text-align:left;">了解即可，知道这是"画页面"的基础</td></tr><tr><td style="text-align:left;"><strong>JavaScript</strong></td><td style="text-align:left;">网页的交互逻辑</td><td style="text-align:left;">了解即可，知道这是"让页面动起来"的语言</td></tr><tr><td style="text-align:left;"><strong>React/Vue/Angular</strong></td><td style="text-align:left;">前端开发框架</td><td style="text-align:left;">知道公司用哪个框架，影响组件复用和开发效率</td></tr><tr><td style="text-align:left;"><strong>微信小程序/Flutter</strong></td><td style="text-align:left;">跨平台开发</td><td style="text-align:left;">如果做小程序或 App，了解开发成本和限制</td></tr><tr><td style="text-align:left;"><strong>WebSocket</strong></td><td style="text-align:left;">实时双向通信</td><td style="text-align:left;">AI 对话产品需要流式输出时用到</td></tr></tbody></table>

**AI PM 的关注点**：

-   **流式输出体验**：大模型生成文本时，前端需要支持"打字机效果"（一个字一个字显示），而不是等全部生成完再显示。这涉及 WebSocket 或 SSE（Server-Sent Events）技术。
-   **响应速度**：前端渲染 1000 条聊天记录时会不会卡顿？需要做虚拟滚动（只渲染可见区域）。
-   **兼容性**：AI 产品如果在企业微信/钉钉内使用，前端需要适配这些平台的限制。

####  2. 后端：用户看不见但支撑一切的部分

**定义**：后端是运行在服务器上的程序，负责处理业务逻辑、数据存储、权限验证、与 AI 模型交互等。

**通俗理解**：后端就是"厨房"——用户在前端点菜（发送请求），后端在厨房里做菜（处理逻辑），然后把做好的菜端上来（返回结果）。

**后端的核心职责**：

-   接收前端请求，解析用户意图
-   调用 AI 模型（LLM、Embedding 等）
-   处理业务逻辑（用户权限、会话管理、数据存取）
-   返回结果给前端

**后端技术栈**：

<table><thead><tr><th style="text-align:left;">技术</th><th style="text-align:left;">用途</th><th style="text-align:left;">AI PM 需要知道的</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Python</strong></td><td style="text-align:left;">AI 后端的主流语言</td><td style="text-align:left;">大多数 AI 服务用 Python 开发</td></tr><tr><td style="text-align:left;"><strong>Node.js/Go/Java</strong></td><td style="text-align:left;">高并发后端服务</td><td style="text-align:left;">Node.js 适合 I/O 密集型，Go 适合高性能，Java 适合企业级</td></tr><tr><td style="text-align:left;"><strong>FastAPI/Flask</strong></td><td style="text-align:left;">Python Web 框架</td><td style="text-align:left;">FastAPI 性能高，是 AI 服务的首选</td></tr><tr><td style="text-align:left;"><strong>Nginx</strong></td><td style="text-align:left;">反向代理和负载均衡</td><td style="text-align:left;">所有请求都先经过 Nginx 再分发到后端服务</td></tr></tbody></table>

**AI PM 的关注点**：

-   **超时处理**：大模型推理可能需要 5-10 秒，后端需要设置合理的超时时间，并设计"等待中"的友好提示。
-   **并发限制**：如果 1000 个用户同时提问，后端会不会崩溃？需要限流（Rate Limiting）和排队机制。
-   **会话管理**：多轮对话需要维护上下文，后端需要存储对话历史。存储在哪？Redis？数据库？存多少轮？这些都是 PM 需要定义的。

* * *

###  （二）API：系统之间的"对话方式"

####  1. 什么是 API？

**定义**：API（Application Programming Interface，应用程序接口）是两个系统之间交换数据的约定方式。

**通俗理解**：API 就像餐厅的服务员——你（前端/用户）不需要进厨房（后端/模型）自己动手，你只需要告诉服务员你要什么（发送请求），服务员会把你的需求传达给厨房，再把做好的菜端给你（返回结果）。

**AI 产品的 API 调用示例**：

```
用户在前端输入："帮我写一封辞职信"
↓
前端发送 API 请求到后端：
POST /api/chat
{
  "message": "帮我写一封辞职信",
  "session_id": "abc123",
  "model": "gpt-4"
}
↓
后端调用大模型 API，获取生成结果
↓
后端返回给前端：
{
  "reply": "尊敬的各位领导...",
  "tokens_used": 245,
  "cost": 0.012
}
↓
前端展示回复给用户
```

####  2. API 的核心概念

<table><thead><tr><th style="text-align:left;">概念</th><th style="text-align:left;">说明</th><th style="text-align:left;">AI PM 关注点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>HTTP Method</strong></td><td style="text-align:left;">GET（获取数据）、POST（提交数据）、PUT（更新）、DELETE（删除）</td><td style="text-align:left;">设计 API 时，选择正确的 Method 是 RESTful 规范的要求</td></tr><tr><td style="text-align:left;"><strong>Status Code</strong></td><td style="text-align:left;">200（成功）、400（请求错误）、401（未授权）、500（服务器错误）</td><td style="text-align:left;">看到 500 就知道是后端挂了；看到 429 就知道是请求太频繁被限流了</td></tr><tr><td style="text-align:left;"><strong>Request/Response</strong></td><td style="text-align:left;">请求是"我问什么"，响应是"你答什么"</td><td style="text-align:left;">PM 需要定义请求和响应的数据结构（字段、类型、必填/选填）</td></tr><tr><td style="text-align:left;"><strong>Authentication</strong></td><td style="text-align:left;">验证调用者身份的方式（API Key、Token、OAuth）</td><td style="text-align:left;">AI 产品的 API 如何防止被滥用？</td></tr><tr><td style="text-align:left;"><strong>Rate Limit</strong></td><td style="text-align:left;">单位时间内允许的最大请求次数</td><td style="text-align:left;">直接影响用户体验和产品定价策略</td></tr><tr><td style="text-align:left;"><strong>Timeout</strong></td><td style="text-align:left;">请求的最大等待时间</td><td style="text-align:left;">大模型推理慢，需要合理设置超时时间</td></tr></tbody></table>

####  3. RESTful API vs GraphQL vs WebSocket

<table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">特点</th><th style="text-align:left;">适用场景</th><th style="text-align:left;">AI PM 关注点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>RESTful API</strong></td><td style="text-align:left;">简单、标准化、无状态</td><td style="text-align:left;">大多数 Web 服务</td><td style="text-align:left;">AI 产品的主流选择</td></tr><tr><td style="text-align:left;"><strong>GraphQL</strong></td><td style="text-align:left;">客户端指定返回哪些字段，减少冗余</td><td style="text-align:left;">数据结构复杂、多端适配</td><td style="text-align:left;">如果前端需要灵活获取数据，可以考虑</td></tr><tr><td style="text-align:left;"><strong>WebSocket</strong></td><td style="text-align:left;">双向实时通信，长连接</td><td style="text-align:left;">实时聊天、流式输出</td><td style="text-align:left;">AI 对话产品的核心技术，支持打字机效果</td></tr><tr><td style="text-align:left;"><strong>SSE</strong></td><td style="text-align:left;">服务器向客户端单向推送流</td><td style="text-align:left;">流式文本生成</td><td style="text-align:left;">比 WebSocket 简单，适合纯流式输出场景</td></tr><tr><td style="text-align:left;"><strong>gRPC</strong></td><td style="text-align:left;">高性能、二进制传输</td><td style="text-align:left;">微服务内部通信</td><td style="text-align:left;">后端服务之间调用 AI 模型时常用</td></tr></tbody></table>

**AI PM 的核心认知**：API 是 AI 产品商业化的核心载体。OpenAI 的商业模式本质上就是卖 API——按 Token 计费。设计好 API 的定价策略、限流策略、文档质量，直接影响产品的商业成功。

* * *

###  （三）网络协议：HTTP/HTTPS 与 DNS

####  1. HTTP vs HTTPS

<table><thead><tr><th style="text-align:left;">协议</th><th style="text-align:left;">全称</th><th style="text-align:left;">特点</th><th style="text-align:left;">AI PM 关注点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>HTTP</strong></td><td style="text-align:left;">超文本传输协议</td><td style="text-align:left;">明文传输，不安全</td><td style="text-align:left;">生产环境绝不应该使用</td></tr><tr><td style="text-align:left;"><strong>HTTPS</strong></td><td style="text-align:left;">HTTP + SSL/TLS 加密</td><td style="text-align:left;">加密传输，安全</td><td style="text-align:left;">所有 AI 产品必须启用，特别是涉及用户隐私数据时</td></tr></tbody></table>

**为什么 AI PM 要关注？**

-   AI 产品经常处理敏感数据（用户提问内容、企业文档），必须确保传输加密
-   企业客户在做安全评估时，会检查是否全站 HTTPS
-   浏览器对 HTTP 网站会标记"不安全"，影响用户信任

####  2. DNS：域名解析系统

**定义**：DNS（Domain Name System）是把人类可读的域名（如 `www.example.com`）转换成机器可读的 IP 地址（如 `192.168.1.1`）的系统。

**通俗理解**：DNS 就像"电话簿"——你记不住朋友的电话号码（IP 地址），但记得住他的名字（域名），电话簿帮你查到号码。

**AI PM 的关注点**：

-   **CDN 加速**：通过 DNS 把用户请求导向最近的服务器节点，降低延迟
-   **负载均衡**：通过 DNS 轮询把流量分配到多台服务器
-   **故障切换**：主服务器宕机时，DNS 自动切换到备用服务器

* * *

###  （四）数据格式：JSON 与 XML

####  1. JSON（JavaScript Object Notation）

**定义**：JSON 是一种轻量级的数据交换格式，易于人类阅读和编写，也易于机器解析和生成。

**示例**：

```
{
  "user_id": "12345",
  "message": "帮我写一封辞职信",
  "timestamp": "2026-01-15T10:30:00Z",
  "metadata": {
    "model": "gpt-4",
    "temperature": 0.7
  }
}
```

**AI PM 的关注点**：

-   JSON 是现代 API 的事实标准，PM 需要能读懂和编写 JSON
-   定义 API 接口时，需要明确每个字段的名称、类型、是否必填、取值范围
-   大模型的输出格式控制：通过 Prompt 让模型输出 JSON，方便后端解析

####  2. XML

**定义**：XML（eXtensible Markup Language）是一种标记语言，用标签来描述数据结构。

**现状**：XML 在 Web 服务中已逐渐被 JSON 取代，但在某些企业级系统（如 SOAP、配置文件）中仍在使用。

**AI PM 的关注点**：如果产品需要对接老旧的企業系统，可能需要处理 XML 格式的数据。

* * *

###  （五）性能指标：QPS、TPS、RT、并发

这组指标是 AI PM 评估产品承载能力的核心工具，必须彻底理解。

####  1. QPS（Queries Per Second）

**定义**：每秒查询数，即系统每秒能处理多少个请求。

**通俗理解**：QPS 就像"收银台的处理速度"——QPS = 10 意味着每秒能处理 10 个顾客的结账。

**AI PM 的计算题**：

-   你的 AI 客服产品，峰值时段有 1000 个用户同时在线
-   每个用户平均每分钟发送 2 条消息
-   峰值 QPS = 1000 × 2 ÷ 60 ≈ **33 QPS**
-   你的后端服务需要能支撑至少 33 QPS，建议按 2 倍冗余设计（66 QPS）

####  2. TPS（Transactions Per Second）

**定义**：每秒事务数，通常指数据库的写入操作数。

**与 QPS 的区别**：

-   QPS 包含所有请求（读 + 写）
-   TPS 只统计写操作（因为写操作更耗资源）

**AI PM 的关注点**：AI 产品的用户行为日志、对话记录都需要写入数据库，TPS 决定了数据库的写入能力。

####  3. RT（Response Time）

**定义**：响应时间，即从发送请求到收到响应的总时间。

**关键指标**：

<table><thead><tr><th style="text-align:left;">指标</th><th style="text-align:left;">定义</th><th style="text-align:left;">用户体验阈值</th><th style="text-align:left;">AI PM 关注点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>平均 RT</strong></td><td style="text-align:left;">所有请求的平均响应时间</td><td style="text-align:left;">&lt; 1 秒为优秀</td><td style="text-align:left;">直观指标，但容易被极端值拉偏</td></tr><tr><td style="text-align:left;"><strong>P50（中位数）</strong></td><td style="text-align:left;">50% 的请求比它快</td><td style="text-align:left;">&lt; 1 秒</td><td style="text-align:left;">反映典型用户体验</td></tr><tr><td style="text-align:left;"><strong>P90</strong></td><td style="text-align:left;">90% 的请求比它快</td><td style="text-align:left;">&lt; 2 秒</td><td style="text-align:left;">反映大多数用户体验</td></tr><tr><td style="text-align:left;"><strong>P99</strong></td><td style="text-align:left;">99% 的请求比它快</td><td style="text-align:left;">&lt; 5 秒</td><td style="text-align:left;">反映最差情况，不能忽视</td></tr></tbody></table>

**AI 产品的特殊挑战**：大模型推理本身就需要 1-5 秒，所以 AI 产品的 RT 普遍比传统互联网产品高。PM 需要：

-   设计"等待中"的友好体验（进度条、打字机动画、有趣提示语）
-   区分"首 Token 延迟"（用户看到第一个字的时间）和"总生成时间"
-   设置合理的超时策略，避免用户无限等待

####  4. 并发（Concurrency）

**定义**：同时处理的请求数量。

**通俗理解**：并发就像"餐厅同时接待多少桌客人"。餐厅有 20 张桌子，最多同时接待 20 桌（并发数 = 20）。如果来了 30 桌客人，后 10 桌需要排队。

**AI PM 的关注点**：

-   大模型推理占用 GPU 资源，并发能力受限于 GPU 数量
-   10 个用户"同时"提问，后端可能需要排队处理
-   需要设计排队提示、限流策略、优雅降级

####  5. 吞吐量（Throughput）

**定义**：单位时间内系统处理的数据量。

**与 QPS 的区别**：

-   QPS 统计"请求个数"
-   吞吐量统计"数据量"（如 MB/s）

**AI PM 的关注点**：上传大文件（如 PDF、视频）给 AI 分析时，吞吐量决定了上传速度和处理速度。

* * *

###  （六）数据库：数据的"仓库"

####  1. 关系型数据库（RDBMS）

<table><thead><tr><th style="text-align:left;">产品</th><th style="text-align:left;">特点</th><th style="text-align:left;">适用场景</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>MySQL</strong></td><td style="text-align:left;">开源、成熟、社区大</td><td style="text-align:left;">大多数 Web 应用的首选</td></tr><tr><td style="text-align:left;"><strong>PostgreSQL</strong></td><td style="text-align:left;">功能强大、支持复杂查询</td><td style="text-align:left;">需要高级特性的场景</td></tr><tr><td style="text-align:left;"><strong>SQL Server</strong></td><td style="text-align:left;">微软生态、企业级</td><td style="text-align:left;">微软技术栈的企业</td></tr><tr><td style="text-align:left;"><strong>Oracle</strong></td><td style="text-align:left;">老牌商业数据库、高性能</td><td style="text-align:left;">金融、电信等大型企业</td></tr></tbody></table>

**核心概念**：

-   **表（Table）**：存储同类数据的地方，如"用户表""订单表"
-   **行（Row）**：一条记录，如一个用户的信息
-   **列（Column）**：一个字段，如"用户名""注册时间"
-   **SQL**：操作数据库的语言（查询、插入、更新、删除）
-   **索引（Index）**：加速查询的数据结构，但会增加写入成本
-   **事务（Transaction）**：保证一组操作要么全部成功，要么全部失败

**AI PM 的关注点**：

-   对话历史存在哪？多久清理一次？是否需要备份？
-   用户表和对话表如何关联？查询性能如何？
-   企业客户要求数据本地化存储，如何设计多租户架构？

####  2. 非关系型数据库（NoSQL）

<table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">代表产品</th><th style="text-align:left;">特点</th><th style="text-align:left;">适用场景</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>文档型</strong></td><td style="text-align:left;">MongoDB</td><td style="text-align:left;">灵活的数据结构，JSON 格式</td><td style="text-align:left;">用户画像、日志存储</td></tr><tr><td style="text-align:left;"><strong>键值型</strong></td><td style="text-align:left;">Redis</td><td style="text-align:left;">内存存储，速度极快</td><td style="text-align:left;">缓存、会话存储、实时排行榜</td></tr><tr><td style="text-align:left;"><strong>列族型</strong></td><td style="text-align:left;">HBase/Cassandra</td><td style="text-align:left;">高吞吐写入，适合大数据</td><td style="text-align:left;">时序数据、海量日志</td></tr><tr><td style="text-align:left;"><strong>图数据库</strong></td><td style="text-align:left;">Neo4j</td><td style="text-align:left;">存储实体之间的关系</td><td style="text-align:left;">知识图谱、社交网络分析</td></tr></tbody></table>

**AI PM 的关注点**：

-   **Redis 缓存**：AI 产品的热门问答可以缓存，减少重复调用大模型的成本
-   **MongoDB**：存储非结构化的用户行为日志、Prompt 版本记录
-   **图数据库**：构建企业知识图谱时可能需要

* * *

###  （七）缓存：让系统跑得更快

####  1. 什么是缓存？

**定义**：缓存是把经常访问的数据临时存储在速度更快的介质中，下次访问时直接读取，避免重复计算或查询数据库。

**通俗理解**：缓存就像"把常用的东西放在手边"——你每天都要用的钥匙，放在门口的挂钩上（缓存），而不是每次出门都去抽屉里翻（查数据库）。

####  2. 缓存的层级

<table><thead><tr><th style="text-align:left;">层级</th><th style="text-align:left;">存储位置</th><th style="text-align:left;">速度</th><th style="text-align:left;">容量</th><th style="text-align:left;">AI PM 关注点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>浏览器缓存</strong></td><td style="text-align:left;">用户设备</td><td style="text-align:left;">最快</td><td style="text-align:left;">最小</td><td style="text-align:left;">静态资源（JS/CSS/图片）的缓存策略</td></tr><tr><td style="text-align:left;"><strong>CDN 缓存</strong></td><td style="text-align:left;">CDN 节点</td><td style="text-align:left;">很快</td><td style="text-align:left;">中等</td><td style="text-align:left;">加速全球用户的访问速度</td></tr><tr><td style="text-align:left;"><strong>应用缓存</strong></td><td style="text-align:left;">服务器内存（Redis）</td><td style="text-align:left;">快</td><td style="text-align:left;">中等</td><td style="text-align:left;">缓存热门问答结果，减少大模型调用</td></tr><tr><td style="text-align:left;"><strong>数据库缓存</strong></td><td style="text-align:left;">数据库内存</td><td style="text-align:left;">较快</td><td style="text-align:left;">较大</td><td style="text-align:left;">数据库自带的查询缓存</td></tr></tbody></table>

####  3. 缓存策略

<table><thead><tr><th style="text-align:left;">策略</th><th style="text-align:left;">原理</th><th style="text-align:left;">适用场景</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Cache Aside</strong></td><td style="text-align:left;">先查缓存，没有则查数据库并写入缓存</td><td style="text-align:left;">读多写少，最常用</td></tr><tr><td style="text-align:left;"><strong>Write Through</strong></td><td style="text-align:left;">写入时同时更新缓存和数据库</td><td style="text-align:left;">数据一致性要求高</td></tr><tr><td style="text-align:left;"><strong>Write Behind</strong></td><td style="text-align:left;">先写缓存，异步写数据库</td><td style="text-align:left;">写入性能要求高</td></tr></tbody></table>

**AI PM 的关注点**：

-   用户反复问同一个问题，可以直接返回缓存答案，节省 Token 成本
-   缓存需要设置过期时间（TTL），避免返回过时的答案
-   缓存和数据库的数据一致性如何处理？

* * *

###  （八）消息队列：异步处理的"邮局"

####  1. 什么是消息队列？

**定义**：消息队列（Message Queue，MQ）是一种异步通信机制，发送方把消息放到队列中，接收方按需从队列中取出处理。

**通俗理解**：消息队列就像"邮局"——你把信（消息）投进邮筒（队列），邮递员（消费者）按顺序取信投递。你不需要等邮递员送完才去做别的事（异步）。

####  2. 消息队列的作用

<table><thead><tr><th style="text-align:left;">作用</th><th style="text-align:left;">说明</th><th style="text-align:left;">AI PM 场景</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>削峰填谷</strong></td><td style="text-align:left;">高峰期把请求暂存，错峰处理</td><td style="text-align:left;">直播活动后，大量用户同时提问，先排队再处理</td></tr><tr><td style="text-align:left;"><strong>异步解耦</strong></td><td style="text-align:left;">发送方和接收方不需要同时在线</td><td style="text-align:left;">用户提交任务后，后台异步调用大模型，完成后通知用户</td></tr><tr><td style="text-align:left;"><strong>可靠传输</strong></td><td style="text-align:left;">消息不会丢失，保证最终处理</td><td style="text-align:left;">重要的 AI 分析任务，确保每个都执行</td></tr></tbody></table>

####  3. 主流消息队列产品

<table><thead><tr><th style="text-align:left;">产品</th><th style="text-align:left;">特点</th><th style="text-align:left;">适用场景</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Kafka</strong></td><td style="text-align:left;">高吞吐、持久化、分布式</td><td style="text-align:left;">日志收集、大数据流处理</td></tr><tr><td style="text-align:left;"><strong>RabbitMQ</strong></td><td style="text-align:left;">功能丰富、支持多种模式</td><td style="text-align:left;">企业级消息通信</td></tr><tr><td style="text-align:left;"><strong>RocketMQ</strong></td><td style="text-align:left;">阿里巴巴开源，高可靠</td><td style="text-align:left;">金融级业务</td></tr></tbody></table>

**AI PM 的关注点**：

-   批量生成任务（如"分析 1000 份文档"）应该走消息队列异步处理，而不是让用户一直等待
-   消息队列中的任务状态如何展示给用户？（排队中→处理中→已完成）
-   任务失败后的重试机制和告警策略

* * *

###  （九）负载均衡：流量的"交通警察"

####  1. 什么是负载均衡？

**定义**：负载均衡（Load Balancing）是把用户请求均匀分配到多台服务器上，避免单台服务器过载。

**通俗理解**：负载均衡就像"交通警察"——来了 100 辆车（请求），警察把它们引导到 5 条车道（服务器），每条车道 20 辆车，避免某条车道堵车。

####  2. 负载均衡算法

<table><thead><tr><th style="text-align:left;">算法</th><th style="text-align:left;">原理</th><th style="text-align:left;">适用场景</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>轮询（Round Robin）</strong></td><td style="text-align:left;">按顺序轮流分配</td><td style="text-align:left;">服务器性能相近</td></tr><tr><td style="text-align:left;"><strong>加权轮询</strong></td><td style="text-align:left;">性能好的服务器分配更多请求</td><td style="text-align:left;">服务器性能不均</td></tr><tr><td style="text-align:left;"><strong>最少连接</strong></td><td style="text-align:left;">把请求发给当前连接数最少的服务器</td><td style="text-align:left;">请求处理时间差异大</td></tr><tr><td style="text-align:left;"><strong>IP 哈希</strong></td><td style="text-align:left;">同一 IP 的请求总是发到同一台服务器</td><td style="text-align:left;">需要保持会话状态</td></tr></tbody></table>

**AI PM 的关注点**：

-   AI 产品的推理服务器成本很高，负载均衡直接影响资源利用率
-   有状态服务（如长对话）需要会话保持，不能用简单的轮询
-   某台 GPU 服务器故障时，负载均衡能否自动剔除并告警？

* * *

###  （十）CDN：让全球用户访问更快

####  1. 什么是 CDN？

**定义**：CDN（Content Delivery Network，内容分发网络）是把网站的静态资源（图片、视频、JS/CSS 文件）缓存到全球各地的节点上，用户访问时从最近的节点下载。

**通俗理解**：CDN 就像"在各地开分店"——北京的用户不需要跑到上海总部（源站）买东西，直接去北京的分店（CDN 节点）就行。

####  2. CDN 的加速效果

<table><thead><tr><th style="text-align:left;">场景</th><th style="text-align:left;">无 CDN</th><th style="text-align:left;">有 CDN</th><th style="text-align:left;">提升</th></tr></thead><tbody><tr><td style="text-align:left;">北京用户访问上海服务器</td><td style="text-align:left;">50ms</td><td style="text-align:left;">10ms</td><td style="text-align:left;">5 倍</td></tr><tr><td style="text-align:left;">美国用户访问中国服务器</td><td style="text-align:left;">300ms</td><td style="text-align:left;">30ms</td><td style="text-align:left;">10 倍</td></tr></tbody></table>

**AI PM 的关注点**：

-   AI 产品的前端资源（JS/CSS/图片）应该走 CDN 加速
-   大模型生成的图片/视频也需要 CDN 分发，否则源站带宽会被撑爆
-   企业客户要求数据不出境时，CDN 节点需要部署在境内

* * *

###  （十一）微服务 vs 单体架构

####  1. 单体架构

**定义**：所有功能模块（用户管理、订单、支付、AI 推理）都写在同一个代码库中，部署在同一台服务器上。

**优点**：简单、开发快、容易调试 **缺点**：一个模块出问题，整个系统崩溃；某个模块需要升级，必须全量部署

####  2. 微服务架构

**定义**：把系统拆分成多个独立的小服务，每个服务负责一个功能模块，独立开发、独立部署、独立扩展。

**优点**：

-   某个服务出问题，不影响其他服务
-   AI 推理服务可以独立扩容（加 GPU），其他服务不需要
-   不同服务可以用不同的技术栈

**缺点**：系统复杂度高，服务间通信成本高，运维难度大

**AI PM 的关注点**：

-   AI 产品通常采用微服务架构，因为 AI 推理服务需要 GPU，而业务逻辑服务不需要
-   微服务之间的调用链路长，出问题后排查困难，需要链路追踪（Trace）
-   服务拆分的粒度需要权衡：太细（几十个服务）→ 运维噩梦；太粗（3-5 个服务）→ 失去微服务的意义

* * *

###  （十二）容器化：Docker 与 Kubernetes

####  1. Docker：应用的"标准化集装箱"

**定义**：Docker 是一种容器技术，把应用程序和它的运行环境打包成一个标准化的"容器"，在任何地方运行效果都一样。

**通俗理解**：Docker 就像"集装箱"——不管里面装什么货物（应用），集装箱的尺寸和接口都是标准化的，可以用同样的吊车（服务器）装卸。

**为什么 AI PM 要关注？**

-   AI 模型的运行环境复杂（特定版本的 Python、CUDA、各种依赖库），Docker 确保"在我电脑上能跑，在你电脑上也能跑"
-   模型版本更新时，用 Docker 可以快速部署新版本，出了问题快速回滚

####  2. Kubernetes（K8s）：容器的"调度中心"

**定义**：Kubernetes 是一个容器编排平台，自动管理大量容器的部署、扩展、故障恢复。

**通俗理解**：K8s 就像"港口调度中心"——港口有成千上万个集装箱（容器），调度中心决定哪个集装箱放到哪艘船上（服务器），哪艘船满了再派一艘（自动扩容），哪艘船坏了就把集装箱转移到其他船上（故障恢复）。

**AI PM 的关注点**：

-   K8s 可以实现 AI 推理服务的自动扩缩容：用户量大了自动加 GPU 实例，用户量小了自动减
-   新模型上线时，K8s 可以灰度发布：先给 5% 的用户用新模型，观察没问题后再全量
-   K8s 的学习成本高，小公司可以用云厂商的托管服务（如阿里云 ACK）

* * *

###  （十三）服务器、云服务器与虚拟机

####  1. 物理服务器

**定义**：真实的计算机硬件，放在机房里，有 CPU、内存、硬盘、网卡。

**AI PM 的关注点**：AI 推理需要 GPU 服务器，价格昂贵（一台 8 卡 A100 服务器约 30-50 万元），企业客户做私有化部署时需要考虑采购成本。

####  2. 虚拟机（VM）

**定义**：在一台物理服务器上，通过虚拟化技术模拟出多台"虚拟"的服务器，每台虚拟机有独立的操作系统。

**通俗理解**：虚拟机就像"把一栋楼分割成多个独立的公寓"——每个公寓（虚拟机）有自己的门锁（操作系统），互不影响。

**AI PM 的关注点**：虚拟机适合业务逻辑服务，但不适合 GPU 推理（GPU 虚拟化技术不成熟，性能损失大）。

####  3. 云服务器（ECS）

**定义**：云厂商（阿里云、AWS、Azure）提供的按需租用的服务器，按小时或按月计费。

**优点**：

-   弹性伸缩：需要时开 10 台，不需要时关 5 台
-   免运维：云厂商负责硬件维护、网络配置
-   全球部署：可以在美国、欧洲、亚太同时部署节点

**AI PM 的成本计算题**：

-   一台 GPU 云服务器（8 卡 A100）：约 ¥15-20 万/年
-   如果需要 5 台 + 3 台备份 = 8 台
-   年度云服务器成本：8 × ¥18 万 = **¥144 万**
-   这还没算带宽、存储、数据库等费用

* * *

###  （十四）用户认证：Cookie、Session、Token 与 JWT

AI 产品需要识别用户身份、管理登录状态，这些概念是设计认证体系的基础。

####  1. Cookie + Session

**原理**：

-   用户登录后，服务器创建一个 Session（会话），存储在服务器内存或 Redis 中
-   服务器把一个 Session ID 通过 Cookie 发给浏览器
-   浏览器每次请求都带上这个 Cookie，服务器根据 Session ID 找到对应的用户信息

**缺点**：

-   服务器需要存储所有在线用户的 Session，占用内存
-   分布式环境下（多台服务器），Session 需要共享，实现复杂

####  2. Token（令牌）

**原理**：

-   用户登录后，服务器生成一个 Token（一串加密的字符串），发给客户端
-   客户端每次请求都带上这个 Token
-   服务器验证 Token 的有效性，不需要存储会话信息

**优点**：服务器无状态，适合分布式系统和大规模用户

####  3. JWT（JSON Web Token）

**定义**：JWT 是一种标准化的 Token 格式，包含三部分：Header（头部）、Payload（载荷，包含用户信息）、Signature（签名，防止篡改）。

**AI PM 的关注点**：

-   AI 产品的 API 通常用 Token 或 JWT 做认证
-   Token 需要设置过期时间（如 2 小时），过期后需要刷新
-   企业级产品需要支持 SSO（单点登录），和客户的内部系统打通

* * *

###  （十五）同步 vs 异步

<table><thead><tr><th style="text-align:left;">概念</th><th style="text-align:left;">定义</th><th style="text-align:left;">通俗理解</th><th style="text-align:left;">AI PM 场景</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>同步</strong></td><td style="text-align:left;">调用方等待被调用方完成后再继续</td><td style="text-align:left;">排队买咖啡，点完单站在柜台等</td><td style="text-align:left;">用户提交问题，等待 AI 回答后才进行下一步</td></tr><tr><td style="text-align:left;"><strong>异步</strong></td><td style="text-align:left;">调用方不等待，被调用方完成后通知调用方</td><td style="text-align:left;">点完咖啡去座位等，好了叫号</td><td style="text-align:left;">用户提交文档分析任务，后台异步处理，完成后发通知</td></tr></tbody></table>

**AI PM 的设计原则**：

-   简单问答（< 3 秒）→ 同步，用户实时看到答案
-   复杂任务（> 5 秒）→ 异步，避免用户长时间等待
-   异步任务需要给用户清晰的状态反馈：已提交→排队中→处理中→已完成

* * *

###  （十六）幂等性：重复操作不重复生效

**定义**：幂等性（Idempotency）是指同一个操作执行一次和执行多次的效果相同。

**通俗理解**：幂等就像"电梯按钮"——按一次和按十次，电梯只会上来一趟。

**AI PM 为什么必须理解幂等？**

**场景 1：用户重复提交**

-   用户点击"生成报告"，网络卡顿，用户又点了一次
-   如果没有幂等性，会生成两份报告，扣两次 Token 费用
-   **解决方案**：给每个请求加一个唯一 ID，后端检测到重复 ID 直接返回缓存结果

**场景 2：消息队列重试**

-   消息队列中的任务处理失败，自动重试
-   如果没有幂等性，同一个任务会被执行多次（如给用户发多次邮件）
-   **解决方案**：任务处理前先检查"是否已经处理过"

**AI PM 的关注点**：

-   所有涉及"扣费""发送通知""修改数据"的 API，都必须考虑幂等性
-   在 PRD 中明确定义："同一请求重复提交，应返回相同结果，不重复计费"

* * *

###  （十七）埋点、日志与监控

####  1. 埋点

**定义**：埋点是在产品中预先植入代码，记录用户的特定行为（如点击按钮、浏览页面、完成支付）。

**埋点的类型**：

<table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th><th style="text-align:left;">示例</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>点击埋点</strong></td><td style="text-align:left;">记录用户点击了哪个按钮</td><td style="text-align:left;">用户点击了"重新生成"按钮</td></tr><tr><td style="text-align:left;"><strong>曝光埋点</strong></td><td style="text-align:left;">记录用户看到了哪个内容</td><td style="text-align:left;">用户看到了 AI 生成的第 3 个答案</td></tr><tr><td style="text-align:left;"><strong>事件埋点</strong></td><td style="text-align:left;">记录用户完成了某个动作</td><td style="text-align:left;">用户复制了 AI 的答案、分享给了好友</td></tr><tr><td style="text-align:left;"><strong>错误埋点</strong></td><td style="text-align:left;">记录系统异常或用户操作异常</td><td style="text-align:left;">模型返回了空结果、用户输入超长文本</td></tr></tbody></table>

**AI PM 的关注点**：

-   埋点是数据驱动决策的基础，没有埋点就无法分析用户行为
-   需要在需求阶段就定义好埋点文档（事件名、参数、触发时机）
-   AI 产品需要特殊的埋点：Prompt 内容、模型版本、生成 Token 数、响应时间

####  2. 日志（Log）

**定义**：日志是系统运行过程中自动记录的信息，包括请求参数、处理过程、错误信息、性能数据等。

**日志的级别**：

-   **DEBUG**：详细的调试信息（开发阶段用）
-   **INFO**：正常的运行信息（如"用户登录成功"）
-   **WARN**：警告信息（如"响应时间超过 3 秒"）
-   **ERROR**：错误信息（如"模型服务连接超时"）

**AI PM 的关注点**：

-   线上出问题后，开发通过日志排查根因
-   PM 需要能读懂日志中的关键信息（如错误码、耗时）
-   日志中不能包含敏感信息（用户密码、身份证号），需要脱敏

####  3. 监控（Monitoring）与告警（Alerting）

**定义**：

-   **监控**：实时收集系统的各项指标（QPS、RT、错误率、CPU/内存使用率），展示在仪表盘上
-   **告警**：当指标超过阈值时，自动发送通知（短信、邮件、钉钉、企业微信）

**AI PM 需要关注的监控指标**：

<table><thead><tr><th style="text-align:left;">指标</th><th style="text-align:left;">正常范围</th><th style="text-align:left;">告警阈值</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">API 错误率</td><td style="text-align:left;">&lt; 1%</td><td style="text-align:left;">&gt; 5%</td><td style="text-align:left;">服务可能出问题了</td></tr><tr><td style="text-align:left;">P99 响应时间</td><td style="text-align:left;">&lt; 5 秒</td><td style="text-align:left;">&gt; 10 秒</td><td style="text-align:left;">用户体验严重受损</td></tr><tr><td style="text-align:left;">GPU 利用率</td><td style="text-align:left;">60%-90%</td><td style="text-align:left;">&gt; 95% 或 &lt; 20%</td><td style="text-align:left;">过高说明要扩容，过低说明资源浪费</td></tr><tr><td style="text-align:left;">Token 消耗增速</td><td style="text-align:left;">日环比 &lt; 20%</td><td style="text-align:left;">日环比 &gt; 50%</td><td style="text-align:left;">可能有异常流量或 Bug</td></tr><tr><td style="text-align:left;">模型幻觉率</td><td style="text-align:left;">&lt; 5%</td><td style="text-align:left;">&gt; 10%</td><td style="text-align:left;">模型效果下降，需要排查</td></tr></tbody></table>

**AI PM 的关注点**：

-   监控是产品的"体检报告"，PM 应该每天看核心指标
-   告警规则需要合理设置：太松→问题发现晚；太严→告警风暴（大量无效告警）
-   告警后需要有明确的处理流程：谁负责？多久内响应？如何止损？

* * *

###  （十八）基础工程概念速查表

<table><thead><tr><th style="text-align:left;">概念</th><th style="text-align:left;">一句话定义</th><th style="text-align:left;">AI PM 什么时候会用到</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>前端</strong></td><td style="text-align:left;">用户能看到和交互的部分</td><td style="text-align:left;">设计 UI、评估交互复杂度</td></tr><tr><td style="text-align:left;"><strong>后端</strong></td><td style="text-align:left;">服务器上的业务逻辑和数据处理</td><td style="text-align:left;">定义 API 接口、设计业务流程</td></tr><tr><td style="text-align:left;"><strong>API</strong></td><td style="text-align:left;">系统之间交换数据的约定</td><td style="text-align:left;">设计产品 API、对接第三方服务</td></tr><tr><td style="text-align:left;"><strong>HTTP/HTTPS</strong></td><td style="text-align:left;">网络传输协议，HTTPS 是加密版</td><td style="text-align:left;">确保产品安全性</td></tr><tr><td style="text-align:left;"><strong>JSON</strong></td><td style="text-align:left;">数据交换格式，像 Python 字典</td><td style="text-align:left;">读写 API 接口文档</td></tr><tr><td style="text-align:left;"><strong>QPS</strong></td><td style="text-align:left;">每秒处理的请求数</td><td style="text-align:left;">评估系统承载能力</td></tr><tr><td style="text-align:left;"><strong>RT</strong></td><td style="text-align:left;">响应时间</td><td style="text-align:left;">评估用户体验</td></tr><tr><td style="text-align:left;"><strong>并发</strong></td><td style="text-align:left;">同时处理的请求数</td><td style="text-align:left;">设计限流和排队策略</td></tr><tr><td style="text-align:left;"><strong>数据库</strong></td><td style="text-align:left;">持久化存储数据的地方</td><td style="text-align:left;">设计数据模型、评估查询性能</td></tr><tr><td style="text-align:left;"><strong>缓存</strong></td><td style="text-align:left;">临时存储常用数据，加速访问</td><td style="text-align:left;">减少大模型重复调用，降低成本</td></tr><tr><td style="text-align:left;"><strong>消息队列</strong></td><td style="text-align:left;">异步传递消息的管道</td><td style="text-align:left;">设计批量任务、削峰填谷</td></tr><tr><td style="text-align:left;"><strong>负载均衡</strong></td><td style="text-align:left;">把流量分配到多台服务器</td><td style="text-align:left;">提高系统可用性和扩展性</td></tr><tr><td style="text-align:left;"><strong>CDN</strong></td><td style="text-align:left;">全球分发静态资源</td><td style="text-align:left;">加速前端资源加载</td></tr><tr><td style="text-align:left;"><strong>微服务</strong></td><td style="text-align:left;">把系统拆分成独立的小服务</td><td style="text-align:left;">AI 推理服务独立扩容</td></tr><tr><td style="text-align:left;"><strong>Docker</strong></td><td style="text-align:left;">应用打包和运行容器</td><td style="text-align:left;">确保环境一致性</td></tr><tr><td style="text-align:left;"><strong>K8s</strong></td><td style="text-align:left;">容器编排和自动管理</td><td style="text-align:left;">自动扩缩容、灰度发布</td></tr><tr><td style="text-align:left;"><strong>Token/JWT</strong></td><td style="text-align:left;">用户身份验证凭证</td><td style="text-align:left;">设计登录和权限体系</td></tr><tr><td style="text-align:left;"><strong>同步/异步</strong></td><td style="text-align:left;">是否等待对方完成</td><td style="text-align:left;">设计用户等待体验</td></tr><tr><td style="text-align:left;"><strong>幂等性</strong></td><td style="text-align:left;">重复操作只生效一次</td><td style="text-align:left;">防止重复扣费、重复发送</td></tr><tr><td style="text-align:left;"><strong>埋点</strong></td><td style="text-align:left;">记录用户行为的数据点</td><td style="text-align:left;">数据驱动产品优化</td></tr><tr><td style="text-align:left;"><strong>监控/告警</strong></td><td style="text-align:left;">实时观察系统健康状态</td><td style="text-align:left;">及时发现和响应线上问题</td></tr></tbody></table>

* * *

##  七、工程与系统技术

###  （一）模型服务化与部署

<table><thead><tr><th style="text-align:left;">技术</th><th style="text-align:left;">说明</th><th style="text-align:left;">AI PM 关注点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>模型量化</strong></td><td style="text-align:left;">降低模型参数的精度（如 FP32→INT8），减少模型大小和推理时间</td><td style="text-align:left;">量化后效果损失是否可接受？</td></tr><tr><td style="text-align:left;"><strong>模型剪枝</strong></td><td style="text-align:left;">删除不重要的参数或神经元，减小模型</td><td style="text-align:left;">剪枝后的推理速度提升 vs 效果损失</td></tr><tr><td style="text-align:left;"><strong>知识蒸馏</strong></td><td style="text-align:left;">用大模型训练小模型，让小模型接近大模型效果</td><td style="text-align:left;">蒸馏模型的效果和成本平衡</td></tr><tr><td style="text-align:left;"><strong>推理加速</strong></td><td style="text-align:left;">使用 TensorRT、ONNX Runtime 等加速推理</td><td style="text-align:left;">延迟降低了多少？成本降低了多少？</td></tr><tr><td style="text-align:left;"><strong>批处理推理</strong></td><td style="text-align:left;">合并多个请求一起处理，提高 GPU 利用率</td><td style="text-align:left;">批处理会增加延迟，需要权衡</td></tr><tr><td style="text-align:left;"><strong>流式输出</strong></td><td style="text-align:left;">模型生成一点输出一点，减少用户等待感</td><td style="text-align:left;">用户体验 vs 实现复杂度</td></tr></tbody></table>

###  （二）MLOps（机器学习运维）

<table><thead><tr><th style="text-align:left;">环节</th><th style="text-align:left;">说明</th><th style="text-align:left;">AI PM 关注点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>模型版本管理</strong></td><td style="text-align:left;">追踪每个模型的训练数据、超参数、效果指标</td><td style="text-align:left;">能否快速回滚到上一个稳定版本？</td></tr><tr><td style="text-align:left;"><strong>A/B 测试</strong></td><td style="text-align:left;">同时运行多个模型版本，对比效果</td><td style="text-align:left;">实验设计是否科学？样本量是否足够？</td></tr><tr><td style="text-align:left;"><strong>效果监控</strong></td><td style="text-align:left;">监控线上模型的准确率、延迟、错误率</td><td style="text-align:left;">什么时候需要人工介入？</td></tr><tr><td style="text-align:left;"><strong>数据漂移检测</strong></td><td style="text-align:left;">检测线上数据分布是否和训练时一致</td><td style="text-align:left;">数据漂移会导致模型效果下降</td></tr><tr><td style="text-align:left;"><strong>自动重训练</strong></td><td style="text-align:left;">当效果下降到阈值时，自动触发重训练</td><td style="text-align:left;">重训练的触发条件和流程</td></tr></tbody></table>

* * *

##  八、数据技术

###  （一）数据 Pipeline

```
数据采集 → 数据清洗 → 数据标注 → 特征工程 → 模型训练 → 效果评估
```

###  （二）数据标注

<table><thead><tr><th style="text-align:left;">标注类型</th><th style="text-align:left;">说明</th><th style="text-align:left;">应用场景</th><th style="text-align:left;">成本</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>分类标注</strong></td><td style="text-align:left;">给数据打类别标签</td><td style="text-align:left;">图像分类、文本分类</td><td style="text-align:left;">低</td></tr><tr><td style="text-align:left;"><strong>边界框标注</strong></td><td style="text-align:left;">在图像中框出目标位置</td><td style="text-align:left;">目标检测</td><td style="text-align:left;">中</td></tr><tr><td style="text-align:left;"><strong>分割标注</strong></td><td style="text-align:left;">精确标注目标的像素边界</td><td style="text-align:left;">图像分割、医学影像</td><td style="text-align:left;">高</td></tr><tr><td style="text-align:left;"><strong>序列标注</strong></td><td style="text-align:left;">给序列中的每个元素打标签</td><td style="text-align:left;">NER（命名实体识别）、词性标注</td><td style="text-align:left;">中</td></tr><tr><td style="text-align:left;"><strong>对话标注</strong></td><td style="text-align:left;">标注对话的质量、安全性、有用性</td><td style="text-align:left;">RLHF、对话系统优化</td><td style="text-align:left;">高</td></tr><tr><td style="text-align:left;"><strong>偏好标注</strong></td><td style="text-align:left;">比较两个输出的优劣</td><td style="text-align:left;">DPO、RLHF</td><td style="text-align:left;">高</td></tr></tbody></table>

###  （三）向量数据库

<table><thead><tr><th style="text-align:left;">产品</th><th style="text-align:left;">特点</th><th style="text-align:left;">适用场景</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>Milvus</strong></td><td style="text-align:left;">开源、高性能、支持多种索引</td><td style="text-align:left;">大规模企业级应用</td></tr><tr><td style="text-align:left;"><strong>Pinecone</strong></td><td style="text-align:left;">托管服务、开箱即用</td><td style="text-align:left;">快速原型、中小规模应用</td></tr><tr><td style="text-align:left;"><strong>Weaviate</strong></td><td style="text-align:left;">支持 GraphQL、模块化</td><td style="text-align:left;">需要复杂查询的应用</td></tr><tr><td style="text-align:left;"><strong>Pgvector</strong></td><td style="text-align:left;">PostgreSQL 插件、与关系数据共存</td><td style="text-align:left;">已有 PostgreSQL 基础设施的团队</td></tr><tr><td style="text-align:left;"><strong>Redis Vector</strong></td><td style="text-align:left;">与 Redis 缓存结合、低延迟</td><td style="text-align:left;">需要极高查询速度的场景</td></tr></tbody></table>

* * *

##  九、模型评估与效果评测技术

###  （一）评估体系设计的核心原则

**原则 1：指标必须与业务目标对齐**

-   ❌ 错误：只看准确率，不看用户满意度
-   ✅ 正确：如果业务目标是提升用户留存，评估指标应该包含"用户是否愿意再次使用"

**原则 2：不能只用一个指标**

-   ❌ 错误：只看准确率
-   ✅ 正确：准确率 + 召回率 + 延迟 + 用户满意度，多维度评估

**原则 3：区分离线评估和线上评估**

-   离线评估：在测试集上跑指标，快速迭代
-   线上评估：A/B 测试、用户反馈、业务指标，真实效果

###  （二）LLM 评估方法

<table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">说明</th><th style="text-align:left;">优缺点</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>人工评估</strong></td><td style="text-align:left;">人类标注员对输出质量打分</td><td style="text-align:left;">最可靠，但成本高、速度慢</td></tr><tr><td style="text-align:left;"><strong>自动评估（BLEU/ROUGE）</strong></td><td style="text-align:left;">用文本相似度指标评估</td><td style="text-align:left;">速度快，但和人工判断相关性差</td></tr><tr><td style="text-align:left;"><strong>模型评估（GPT-4 作为裁判）</strong></td><td style="text-align:left;">用更强的模型来评估较弱的模型</td><td style="text-align:left;">成本适中，但可能引入裁判模型的偏见</td></tr><tr><td style="text-align:left;"><strong>多维度评分</strong></td><td style="text-align:left;">从多个维度打分（准确性、流畅性、安全性等）</td><td style="text-align:left;">更全面，但设计复杂</td></tr></tbody></table>

###  （三）构建有效的测试集

**测试集设计原则**：

1.  **覆盖全面**：覆盖各种场景、边界情况、异常情况
2.  **难度分层**：简单/中等/困难问题都要有
3.  **避免泄露**：测试数据不能出现在训练数据中
4.  **定期更新**：防止模型"记住"测试集答案

**AI PM 的核心职责**：和算法团队一起定义"什么是一个好的测试用例"，确保测试集能真实反映用户需求。

* * *

##  十、技术认证与学习资源

###  （一）值得考虑的技术认证

<table><thead><tr><th style="text-align:left;">认证</th><th style="text-align:left;">颁发机构</th><th style="text-align:left;">内容</th><th style="text-align:left;">适合人群</th><th style="text-align:left;">价值评估</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>AWS Machine Learning Specialty</strong></td><td style="text-align:left;">Amazon</td><td style="text-align:left;">云上的机器学习全流程</td><td style="text-align:left;">做云 AI 产品的 PM</td><td style="text-align:left;">⭐⭐⭐⭐</td></tr><tr><td style="text-align:left;"><strong>Google Cloud Professional Machine Learning Engineer</strong></td><td style="text-align:left;">Google</td><td style="text-align:left;">GCP 上的 MLOps</td><td style="text-align:left;">做 GCP 生态的 PM</td><td style="text-align:left;">⭐⭐⭐⭐</td></tr><tr><td style="text-align:left;"><strong>Azure AI Engineer Associate</strong></td><td style="text-align:left;">Microsoft</td><td style="text-align:left;">Azure AI 服务</td><td style="text-align:left;">做 Azure 生态的 PM</td><td style="text-align:left;">⭐⭐⭐⭐</td></tr><tr><td style="text-align:left;"><strong>TensorFlow Developer Certificate</strong></td><td style="text-align:left;">Google</td><td style="text-align:left;">TensorFlow 开发</td><td style="text-align:left;">想深入理解深度学习框架的 PM</td><td style="text-align:left;">⭐⭐⭐</td></tr><tr><td style="text-align:left;"><strong>Deep Learning Specialization</strong></td><td style="text-align:left;">Coursera (吴恩达)</td><td style="text-align:left;">深度学习基础</td><td style="text-align:left;">所有 AI PM</td><td style="text-align:left;">⭐⭐⭐⭐⭐</td></tr><tr><td style="text-align:left;"><strong>Machine Learning Specialization</strong></td><td style="text-align:left;">Coursera (吴恩达)</td><td style="text-align:left;">机器学习基础</td><td style="text-align:left;">AI PM 入门</td><td style="text-align:left;">⭐⭐⭐⭐⭐</td></tr></tbody></table>

###  （二）推荐学习资源

**基础课程**：

-   吴恩达《Machine Learning Specialization》（Coursera）—— 最经典的 ML 入门
-   吴恩达《Deep Learning Specialization》（Coursera）—— 深度学习基础
-   Fast.ai《Practical Deep Learning for Coders》—— 偏实践的深度学习

**大模型专项**：

-   李沐《动手学深度学习》—— 中文经典，理论和实践结合
-   OpenAI Cookbook —— 官方最佳实践
-   LangChain 官方文档 —— RAG 和 Agent 开发

**技术博客与社区**：

-   Papers With Code —— 最新论文和代码
-   Hugging Face Blog —— 大模型技术动态
-   机器之心、InfoQ AI 前线 —— 中文 AI 资讯

###  （三）AI PM 的学习路径建议

```
第一阶段（1-2 个月）：建立基础认知
├── 完成吴恩达《Machine Learning Specialization》
├── 理解神经网络、CNN、RNN、Transformer 的基本原理
└── 目标：达到"理解"层次

第二阶段（2-3 个月）：深入大模型
├── 学习 LLM 原理：预训练、SFT、RLHF
├── 实践 Prompt Engineering：在 Claude Code / ChatGPT 上大量练习
├── 学习 RAG：搭建一个简单的知识库问答系统
└── 目标：达到"判断"层次

第三阶段（持续）：实践与跟踪前沿
├── 参与实际 AI 产品项目
├── 定期阅读论文和技术博客
├── 参加技术分享会和行业会议
└── 目标：在特定领域达到"创造"层次
```

* * *

##  十一、与算法工程师的高效协作

###  （一）建立共同语言

<table><thead><tr><th style="text-align:left;">算法工程师常说的</th><th style="text-align:left;">AI PM 应该理解的</th><th style="text-align:left;">PM 可以这样回应</th></tr></thead><tbody><tr><td style="text-align:left;">"这个需求技术上不可行"</td><td style="text-align:left;">可能真的不可行，也可能是有难度但能做</td><td style="text-align:left;">"能不能详细说说难点在哪？如果降低一些预期，最小可行版本是什么？"</td></tr><tr><td style="text-align:left;">"需要更多标注数据"</td><td style="text-align:left;">当前数据量不够模型学习规律</td><td style="text-align:left;">"需要多少条？什么样的数据？预估标注成本是多少？"</td></tr><tr><td style="text-align:left;">"模型过拟合了"</td><td style="text-align:left;">模型记住了训练数据，泛化能力差</td><td style="text-align:left;">"我们需要增加数据量还是简化模型？"</td></tr><tr><td style="text-align:left;">"召回率太低"</td><td style="text-align:left;">很多正例没有被模型找出来</td><td style="text-align:left;">"这是业务不能接受的。我们可以放宽阈值，或者增加召回策略吗？"</td></tr><tr><td style="text-align:left;">"上线延迟太高了"</td><td style="text-align:left;">模型推理速度慢，用户体验差</td><td style="text-align:left;">"瓶颈在模型本身还是基础设施？量化或模型压缩能解决问题吗？"</td></tr><tr><td style="text-align:left;">"这个指标已经饱和了"</td><td style="text-align:left;">当前方案已经接近天花板</td><td style="text-align:left;">"那我们应该尝试新的技术路线，还是把精力放到其他指标上？"</td></tr></tbody></table>

###  （二）需求沟通的最佳实践

**1\. 带着技术思考去沟通**

-   ❌ "我要一个智能客服"
-   ✅ "我要一个基于 RAG 的企业知识库问答系统，准确率要求 90% 以上，响应时间 2 秒内，需要支持私有化部署"

**2\. 明确业务目标和技术指标**

-   不要只提"准确率要高"，要明确：
    -   准确率目标是多少？（90%？95%？99%？）
    -   这个目标是基于什么？（竞品水平？用户容忍度？业务价值？）
    -   如果达不到，备选方案是什么？

**3\. 理解技术约束**

-   算法团队说"做不了"时，多问一句：
    -   是技术原理上不可行？
    -   还是数据/算力/时间不够？
    -   如果资源充足，是否可行？

**4\. 参与技术评审**

-   作为 PM，你应该参加算法方案的技术评审
-   不需要评审技术细节，但要关注：
    -   方案是否覆盖了所有业务场景？
    -   评估方法是否科学？
    -   风险点有没有兜底方案？

* * *

##  十二、技术理解自评清单

用以下清单评估自己的技术理解水平，找出薄弱点：

###  机器学习基础

-   \[ \] 我能解释监督学习、无监督学习、强化学习的区别
-   \[ \] 我能解释准确率、精确率、召回率、F1 值的区别和适用场景
-   \[ \] 我能解释过拟合和欠拟合，以及如何解决
-   \[ \] 我能解释偏差和方差的权衡

###  深度学习

-   \[ \] 我能解释神经网络的基本结构（输入层、隐藏层、输出层）
-   \[ \] 我能解释 CNN 为什么适合图像任务
-   \[ \] 我能解释 Transformer 的核心机制（自注意力）
-   \[ \] 我知道 GPT、BERT、T5 的区别

###  大语言模型

-   \[ \] 我能解释 LLM 的预训练、SFT、RLHF 三阶段
-   \[ \] 我能解释 Token、上下文窗口、Temperature 的含义
-   \[ \] 我能设计一个有效的 System Prompt
-   \[ \] 我能解释 RAG 的工作原理和常见问题
-   \[ \] 我能估算一个 AI 产品的 Token 消耗和成本
-   \[ \] 我能解释幻觉产生的原因和缓解方法

###  其他技术领域

-   \[ \] 我了解计算机视觉的主要任务和评估指标
-   \[ \] 我了解语音识别和语音合成的基本原理
-   \[ \] 我了解推荐系统的召回-排序架构
-   \[ \] 我了解向量数据库的作用和选型

###  基础工程概念

-   \[ \] 我能解释前端和后端的区别，以及它们如何协作
-   \[ \] 我能解释 API 的工作原理，能读懂 JSON 格式的数据
-   \[ \] 我能解释 QPS、RT、并发的含义，并能做简单的容量估算
-   \[ \] 我能解释数据库和缓存的区别和适用场景
-   \[ \] 我能解释消息队列的作用，并知道什么时候该用异步处理
-   \[ \] 我能解释负载均衡、CDN、微服务的基本原理
-   \[ \] 我能解释 Docker 和 K8s 的作用
-   \[ \] 我能解释 Token/JWT 认证的基本流程
-   \[ \] 我能解释同步/异步的区别，以及幂等性的重要性
-   \[ \] 我能设计合理的埋点方案，理解监控告警的核心指标

###  工程与评估

-   \[ \] 我能解释模型量化、剪枝、蒸馏的区别
-   \[ \] 我了解 MLOps 的核心环节
-   \[ \] 我能设计一个多维度的模型评估体系
-   \[ \] 我能设计一个有效的测试集

###  协作能力

-   \[ \] 我能听懂算法工程师的技术术语
-   \[ \] 我能提出有技术深度的产品需求
-   \[ \] 我能判断一个需求的技术可行性
-   \[ \] 我能和算法团队一起定义技术目标

**评分标准**：

-   0-10 分：技术基础薄弱，建议从基础课程开始系统学习
-   11-20 分：有一定基础，建议深入大模型和 RAG 领域
-   21-30 分：技术理解良好，建议在实践中持续深化
-   31-40 分：技术理解优秀，可以开始在特定领域做创新

* * *

##  十三、小结

###  本节核心要点

1.  **AI PM 需要懂技术，但不需要写代码**。技术理解的目的是判断可行性、设定合理预期、与算法团队高效协作。
    
2.  **技术理解有四个层次**：知道 → 理解 → 判断 → 创造。AI PM 应该在核心领域（LLM、RAG、Prompt Engineering、模型评估）达到"判断"层次。
    
3.  **技术知识全景**：从应用层到基础设施层，AI PM 需要在模型层和应用层深入理解，对框架层、数据层、基础设施层有基本认知。
    
4.  **核心技术概念**：机器学习基础、深度学习（特别是 Transformer）、大语言模型（预训练/SFT/RLHF）、RAG、Prompt Engineering、计算机视觉、语音技术、推荐系统。
    
5.  **基础工程概念**：前端/后端、API、QPS/RT/并发、数据库/缓存/消息队列、负载均衡/CDN、微服务/容器化、认证/同步异步/幂等性、埋点/监控——AI PM 必须能和前后端工程师用同一套语言沟通。
    
6.  **成本意识**：Token 消耗、GPU 算力、云服务器、带宽、标注成本——AI PM 必须具备成本计算能力，否则产品可能在经济上不可持续。
    
7.  **评估体系设计**：定义"好"的标准是 AI PM 的核心职责之一。指标必须与业务目标对齐，不能只看准确率。
    
8.  **与算法团队协作**：建立共同语言，带着技术思考去沟通，明确业务目标和技术指标，理解技术约束。
    
9.  **持续学习**：AI 技术迭代极快，AI PM 需要保持学习热情，跟踪前沿动态。