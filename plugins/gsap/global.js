import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CustomEase } from '@/plugins/gsap/CustomEase'
gsap.registerPlugin(CustomEase)
gsap.registerPlugin(ScrollTrigger)
CustomEase.create('cusEase1', '0.68, -0.99, 0.32, 0.88')
CustomEase.create('cusEase2', '0, 0.83, 0.12, 1.26')
