create table brand_new_metadata
(
    major_category text,
    minor_category text
);

alter table brand_new_metadata
    owner to postgres;

INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类', '剔除大用户的社会用电量');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类', '全社会用电量');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类', '年最大负荷');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类-行业', '黄磷用电量');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类-行业', '第一产业用电量');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类-行业', '煤炭开采和洗选业用电量');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类-行业', '第二产业用电量');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类-行业', '铝冶炼用电量');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类-行业', '肥料制造用电量');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类-行业', '石油和天燃气开采业用电量');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类-行业', '农林牧渔业');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类-行业', '水泥制造用电量');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类-行业', '采矿业用电量');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类-行业', '电石用电量');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类-行业', '黑色金属矿采选业用电量');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('社会经济类', '第三产业GDP');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('社会经济类', '能源消费总值');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('社会经济类', '人均GDP');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('社会经济类', '人口');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('社会经济类', 'GDP');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('社会经济类', '第一产业GDP');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('社会经济类', '第二产业GDP');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('社会经济类', '能源生产总值');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类-行业', '第三产业用电量');
INSERT INTO public.brand_new_metadata (major_category, minor_category) VALUES ('电力电量类-行业', '黑色金属冶炼及压延加工业用电量');