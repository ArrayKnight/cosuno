import { capitalCase } from 'change-case'
import { sampleSize } from 'lodash'
import { LoremIpsum } from 'lorem-ipsum'

const lipsum = new LoremIpsum()

interface Specialty {
    id: number
    name: string
}

export const specialties: Specialty[] = [
    'Project Planning',
    'Project Management',
    'Site Construction',
    'Concrete',
    'Masonry',
    'Metals',
    'Wood and Plastics',
    'Thermal and Moisture Protection',
    'Doors and Windows',
    'Finishes',
    'Specialties',
    'Equipment',
    'Special Construction',
    'Mechanical/Plumbing',
    'Electrical',
].map((name, id) => ({ id, name }))

interface Company {
    id: number
    name: string
    logo: string
    location: string
    specialties: number[]
}

export const companies: Company[] = new Array(
    Math.round(250 * Math.random()) + 250,
)
    .fill(null)
    .map((_, index) => ({
        id: index,
        name: capitalCase(lipsum.generateWords(Math.ceil(Math.random() + 0.5))),
        logo: '',
        location: '',
        specialties: sampleSize(specialties, Math.floor(Math.random() * 4)).map(
            ({ id }) => id,
        ),
    }))
